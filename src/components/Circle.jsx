import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useContext } from "react";
import { circleContext } from "../context/Circlecontext";

const Circle = () => {
    const [isHovered, setIsHovered] = useContext(circleContext)
    const circleRef = useRef(null);
    useEffect(() => {
        gsap.set(circleRef.current, {
            xPercent: -50,
            yPercent: -50
        })

        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            gsap.to(circleRef.current, {
                x: mouseX,
                y: mouseY,
                ease: 'power1.out'
            })
        })

        return () => window.removeEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            if (!mouseX && !mouseY) {
                circleRef.current.style.opacity = 0
            }
            gsap.to(circleRef.current, {
                x: mouseX,
                y: mouseY,
                ease: 'power4.inOut'
            })
        })
    }, [])

    return (
        <div ref={circleRef} className={`circle pointer-events-none flex justify-center ${isHovered ? 'h-30 w-30 bg-white/30 backdrop-blur-md duration-150' : 'h-3 w-3 bg-[#1B1B1C]'} items-center text-white fixed z-5 rounded-full`}>{isHovered && 'View'}</div>
    )
}

export default Circle