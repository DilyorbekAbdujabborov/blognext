'use client'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Mobile = () => {
	const pathname = usePathname()
	return (
		<div>
			<Sheet>
				<SheetTrigger asChild className='flex md:hidden'>
					<Button size={'icon'} variant={'ghost'}>
						<MenuIcon />
					</Button>
				</SheetTrigger>
				<SheetContent side={'left'}>
					<Link href={'/'}>
						<span className='text-4xl font-creteRound'>Sammi</span>
					</Link>
					<hr />
					<div className='flex flex-col space-y-3 mt-2 '>
						{navLinks.map(nav => (
							<Link
								key={nav.route}
								href={nav.route}
								className={cn(
									'hover:bg-blue-400/20 py-2 px-4 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
									pathname === nav.route && 'text-blue-400 bg-blue-400/20'
								)}
							>
								<nav.icon className='w-4 h-4' />
								{nav.name}
							</Link>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default Mobile
