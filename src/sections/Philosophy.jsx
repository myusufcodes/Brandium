import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);
const Philosophy = () => {
    useGSAP(() => {
        gsap.from('h4', {
            y: 20,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: '#philosophy',
                start: 'top 80%',
            }
        })
        gsap.from('.about span', {
            y: 20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#philosophy',
                start: 'top 78%',
            }
        })
        gsap.from('.purpose span', {
            y: 20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#philosophy',
                start: 'top 78%',
            }
        })
    })
    return (
        <section id="philosophy" className="mt-32 w-full flex">
            <div className="w-1/2"></div>
            <div className="content w-1/2 flex">
                <div className="philosophy flex flex-col gap-3 text-[]">
                    <h4 className="font-[fontlight] text-lg flex gap-1 ">
                        <img src="/star.svg" alt="star" width={13} />
                        Philosophy
                    </h4>
                    <div className="flex gap-2 w-full mr-12">

                        <p className="about font-[fontlighter] text-sm flex flex-col text-[#929191] w-1/2">
                            <span>Since 2014 our branding agency has been helping</span>
                            <span>ambitious businesses build identities that stand out.</span>
                            <span>As a creative branding agency we focus on brand</span>
                            <span>design and digital design that gives companies a</span>
                            <span>clear and confident presence. We choose vision over</span>
                            <span>volume.</span>
                        </p>

                        <p className="purpose font-[fontlighter] text-sm flex flex-col text-[#929191] w-1/2">
                            <span>Every project is intentional and built with purpose. As</span>
                            <span>a design agency we work with brands that push</span>
                            <span>industries forward through bold design and strategic</span>
                            <span>creativity. We craft identities, experiences, and visual</span>
                            <span>systems for companies that want to lead.</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Philosophy