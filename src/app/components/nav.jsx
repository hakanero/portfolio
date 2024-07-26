"use client"
import Link from 'next/link'
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';


const navItems = {
	'/': {
		name: 'home',
	},
	'/currently': {
		name: 'currently',
	},
	'/contact': {
		name: 'contact',
	},
	'/medias/resume.pdf':{
		name: "resume"
	}
}

export function Navbar() {
	const container = useRef();

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start end', 'end end']

    });

	const y = useTransform(scrollYProgress, [0, 1], [-225, 0]);


	return (
		<aside ref={container} className="sticky bottom-0 bg-turkuaz h-[12vh] w-full">
			<div className="flex justify-center items-center h-full">
				<motion.nav style= {{y}} className="h-full flex justify-center gap-10 items-center p-10 w-full w-svw md:w-[50vw]">
					{Object.entries(navItems).map(([path, { name }]) => (
						<Link
							key={path}
							href={path}
							className="font-bold transition-all hover:text-gold dark:hover:text-gold text-[4vw] md:text-[3vh] flex items-center"
						>
							{name}
						</Link>
					))}
				</motion.nav>
			</div>
		</aside>
	)
}
