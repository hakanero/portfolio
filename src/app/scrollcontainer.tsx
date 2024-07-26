"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, []);
	return (
		<div className="w-svw h-svh relative z-10 flex items-center justify-center drop-shadow-[0px_10px_60px_#000000] bg-black">
			<p className="absolute bottom-1 right-10 text-turkuaz">
				scroll down
			</p>
			{children}
		</div>)
}