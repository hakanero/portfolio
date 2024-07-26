"use client"
import FloatingShape from "./components/floatingShape"


export default function Page() {
	return (
		<div className="h-svh w-svw">
			<div className="absolute bottom-[10vh] left-[3vw] text-gold">
				<p>hakan eroğlu, </p>
				<p>computer science student.</p>
				<p>based in waterville/me🌲 and antalya/turkey🏖️.</p>
			</div>
			
			<FloatingShape />
			
		</div>
			
	)
}
