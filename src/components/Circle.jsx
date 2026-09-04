import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useContext } from "react";
import { circleContext } from "../context/Circlecontext";
import { journalContext } from "../context/JournalContext";
import { footerContext } from "../context/FooterContext";
import { mailContext } from "../context/MailContext";

const Circle = () => {
    const [isHovered, setIsHovered] = useContext(circleContext);
    const [isJournalHovered, setIsJournalHovered] = useContext(journalContext);
    const [footerEntered, setFooterEntered] = useContext(footerContext);
    const [isMailHovered, setIsMailHovered] = useContext(mailContext);
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
        <div ref={circleRef} className={`circle ${footerEntered ? 'bg-[#adff2f] duration-150' : 'bg-[#1B1B1C] duration-150'} pointer-events-none flex justify-center ${isHovered || isJournalHovered ? 'h-30 w-30 bg-white/30 backdrop-blur-md duration-150' : 'h-3 w-3 bg-[#1B1B1C] duration-150'} ${isMailHovered ? 'h-30 w-30 duration-150' : 'h-3 w-3 duration-150'} items-center text-white fixed z-5 rounded-full`}>
            {isHovered && 'View'}
            {isJournalHovered && (<div className="flex flex-col justify-center items-center"><span>Read </span> <span>article</span></div>)}
            {isMailHovered && (<span className="text-black font-[fontlight]">Send Mail</span>)}
        </div>
    )
}

export default Circle