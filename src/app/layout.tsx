import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav.jsx'
import { baseUrl } from './sitemap'
import ScrollContainer from "./scrollcontainer"


export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "portfolio | hakan eroglu",
		template: "%s | hakan's portfolio",
	},
	description: "hakan eroglu is a programmer based in waterville/me and antalya/turkey. he has knowledge in react(native)/flutter/nextjs/python/java/c#.",
	openGraph: {
		title: "hakan's portfolio",
		description: "hakan eroglu's portfolio",
		url: baseUrl,
		siteName: "hakan's portfolio",
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={cx(
				'text-black bg-white dark:text-white dark:bg-black',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className="antialiased max-w-100 overflow-x-hidden text-lg lg:mx-auto h-svh w-svw relative">
				
				<main>
					<ScrollContainer>
						{children}	
					</ScrollContainer>
					<Navbar />
				</main>
			</body>
		</html>
	)
}
