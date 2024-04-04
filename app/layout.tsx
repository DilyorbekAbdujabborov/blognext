import type { Metadata } from 'next'
import { Inter, Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'
const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})

const workSans = Work_Sans({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Sammi dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar,  maslahatlar, va dasturlash sohasidagi eng so`nggi xabarlar. Binzning blogda dasturlashni  o`rganish va rivojlantirish  uhcun qo`llanma  topishingiz mumkin',
}
function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${workSans.variable} ${creteRound.variable}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
export default RootLayout
