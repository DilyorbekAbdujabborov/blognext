import BlogCard from '@/components/card/blog'
import { getBlogs } from '@/service/blog.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Blogpage = async() => {
	const blogs = await getBlogs()
	return (
		<div className='max-w-8xl mx-auto'>
			<div className='reletive min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Blogs</span>
				</h2>
				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 space-y-24 mt-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical  />
				))}
			</div>
		</div>
	)
}

export default Blogpage
