import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

export default function Preloader({ onComplete }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        const handleLoad = () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete()
                }
            });

            tl
                .to(textRef.current, {
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.inOut'
                })
                .to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    delay: 0.2
                })
        }
        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
        }
    }, [onComplete])
    return (
        <div ref={containerRef} className="bg-black text-white h-screen w-screen fixed z-[100] inset-0 flex justify-center items-center">
            <h1 ref={textRef} className="font-[fontlight] text-lg opacity-30">Brandium Agency</h1>
        </div>
    )
}