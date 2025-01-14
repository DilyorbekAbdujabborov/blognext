import { Button } from '@/components/ui/button'
import {
	ArrowUpRight,
	CalendarDays,
	Clock,
	Facebook,
	Link2,
	Linkedin,
	Minus,
	Send,
	Twitter,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'
import { content } from '@/constants'
import Link from 'next/link'
import { getDetailedBlog } from '@/service/blog.service'

const SlugPage = async ({ params }: { params: { slug: string } }) => {
	const blog = await getDetailedBlog(params.slug)
	return (
		<div className='pt-[16vh] max-w-6xl mx-auto'>
			<h1 className='lg:text-6xl  text-4xl font-creteRound'>{blog.title}</h1>

			<div className='flex items-center flex-wrap justify-center gap-4 mt-4'>
				<div className='flex items-center gap-2'>
					<Image
						src={blog.author.image.url}
						alt='author'
						width={30}
						height={30}
						className='object-cover rounded-sm'
					/>
					<p>by {blog.author.title}</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>o2 min read</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>o2 dec, 2024</p>
				</div>
			</div>
			<Image
				src={blog.image.url}
				alt='alt'
				width={`1120`}
				height={`590`}
				className='mt-4 rounded-md'
			/>

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 reletive'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>Share</p>
						<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3  mt-4'>
							<Button size={'icon'} variant={'outline'}>
								<Twitter />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Facebook />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Linkedin />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Send />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Link2 />
							</Button>
						</div>
					</div>
				</div>
				<div className='flex-1 prose dark:prose-invert'>{parse(content)}</div>
			</div>

			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={blog.author.image.url}
					alt='author'
					width={'155'}
					height={'155'}
					className='rounded-md max-md:self-start'
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-creteRound'>{blog.author.title}</h2>
					<p className='line-clamp-2 text-muted-foreground'>
						{blog.author.bio}
					</p>
					<Link
						href={'/'}
						className='flex items-center gap-2 hover:text-blue-400 underline transition-colors'
					>
						<span>See all post by this author</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SlugPage
