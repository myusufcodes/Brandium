'use client'
import { useGSAP } from "@gsap/react"
import { navLinks } from "../constants"
import { playSound } from "./Sound"
import gsap from "gsap"
const Navbar = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('nav .navLogo', {
            y: 20,
            opacity: 0,
            duration: 0.5
        })
        tl.from('ul li', {
            y: 20,
            opacity: 0,
            stagger: 0.1
        })
        tl.from('.cta-section', {
            y: 20,
            opacity: 0
        })
    }, [])
    return (
        <header className="w-full fixed top-0 z-15">
            <nav className="w-full flex justify-between items-center px-12 py-6 overflow-hidden">
                <img onMouseEnter={playSound} src="/logo.svg" alt="Logo" width={175} className="navLogo cursor-pointer" />

                <ul className="links flex justify-center items-center gap-14 font-[fontlighter] font-semibold">
                    {navLinks.map((link, index) => (
                        <li onMouseEnter={playSound} key={index} className="group flex justify-center items-center gap-1">
                            <img src="/star.svg" alt="Star" width={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-150" />
                            <a href="#" className="group-hover:translate-x-2 transition-all duration-150">{link}</a>
                        </li>
                    ))}
                </ul>

                <div className="cta-section flex justify-center items-center gap-14">
                    <span onMouseEnter={playSound} className="group uppercase cursor-pointer relative flex flex-col justify-center items-center overflow-hidden relative">
                        <span className="uppercase group-hover:-translate-y-5 transition-all duration-300">Nl</span>
                        <span className="absolute uppercase translate-y-5 group-hover:translate-y-0 transition-all duration-300">Nl</span>
                    </span>

                    <button onMouseEnter={playSound} className="CTA-Btn px-6 py-2 flex justify-center items-center gap-3 rounded-sm bg-[#1B1B1C] cursor-pointer hover:scale-[105%] transition-transform duration-150">
                        <span className="font-[fontmd] text-lg text-white ">Let's Talk</span>

                        <div className="dots">
                            <div className="dot transition-all duration-200 relative h-1 w-1 bg-[#afafaf]" />
                            <div className="dot transition-all duration-200 relative h-1 w-1 translate-x-1 bg-[#afafaf]" />
                            <div className="dot transition-all duration-200 relative h-1 w-1 translate-x-2 bg-[#afafaf]" />
                            <div className="dot transition-all duration-200 relative h-1 w-1 translate-x-1 bg-[#afafaf]" />
                            <div className="dot transition-all duration-200 relative h-1 w-1 bg-[#afafaf]" />
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar