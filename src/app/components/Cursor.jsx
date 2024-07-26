'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Cursor() {
    const mouse = useRef({x: 0, y: 0});
    const circle = useRef();
	let size = 100;
    
    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }

        moveCircle(mouse.current.x, mouse.current.y);
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [])

    return (
        <div className='relative h-screen hidden md:block z-100'>
            <div 
                ref={circle}
                style={{
                    width: size,
                    height: size,
					cursor: null,
					mixBlendMode: "difference",
                }}
                className='top-0 left-0 fixed rounded-full bg-turkuaz' 
            />
        </div>
    )
}