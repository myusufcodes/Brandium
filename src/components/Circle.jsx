import { useRef, useEffect } from "react";
import gsap from "gsap";

const Circle = () => {
    const circleRef = useRef(null);

    useEffect(() => {
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
                ease: 'power1.out'
            })
        })
    }, [])

    return (
        <div ref={circleRef} className="circle fixed z-8 h-3 w-3 bg-[#1B1B1C] rounded-full"></div>
    )
}

export default Circle