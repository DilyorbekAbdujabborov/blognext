import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTags = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				cmsBlog {
					... on CmsBlog {
						id
						title
						author {
							bio
							image {
								url
							}
							title
						}
						content {
							html
						}
						slug
						createdAt
						description
						image {
							url
						}
					}
				}
				name
        
			}
		}
	`

	const { tag } = await request<{ tag: { cmsBlog: IBlog[]; name: string } }>(
		graphqlAPI,
		query,
		{
			slug,
		}
	)
	return tag
}
