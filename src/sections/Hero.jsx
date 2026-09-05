import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Hero = ({ isLoading }) => {
    const tlRef = useRef(null);
    const heroRef = useRef(null);
    useGSAP(() => {
        tlRef.current = gsap.timeline({ paused: true })

        tlRef.current
            .from('.top span', {
                rotateX: -75,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
            }, 'hero')
            .from('.top span', {
                color: '#adff2f',
                duration: 1.5,
                stagger: 0.2,
            }, 'hero')
            .from('.right span', {
                y: 25,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2
            }, 'hero')
    }, { scope: heroRef })

    useGSAP(() => {
        if (!isLoading && tlRef.current) {
            tlRef.current.play();
        }
    }, [isLoading])
    return (
        <section id="hero" className="pt-40" ref={heroRef}>
            <div className="container w-full px-12">
                <div className="top font-[fontlighter] text-left text-[5vw] leading-[5.5vw] tracking-tighter perspective-distant">
                    <span className="inline-block">We're a creative branding</span> <br />
                    <span className="inline-block">agency helping ambitious</span> <br />
                    <span className="inline-block">brands disrupt the expected</span>
                </div>
                <div className="bottom flex w-full">
                    <div className="left w-[65%]"></div>
                    <div className="right w-[35%] text-[#929191] font-[fontlight] overflow-hidden">
                        <span className="inline-block">At Brandium® we build brand identities, design striking websites, and</span> <br />
                        <span className="inline-block">craft digital experiences that fuel growth. As a branding & webdesign</span> <br />
                        <span className="inline-block">agency we turn your business into a distinctive digital powerhouse.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero