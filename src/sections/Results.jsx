import { useGSAP } from '@gsap/react'
import Marquee from '../components/Marquee'
import gsap from 'gsap'

const Results = () => {

    useGSAP(() => {
        gsap.from('.results-heading span', {
            rotateX: -75,
            color: '#adff2f',
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#results',
                start: 'top 80%'
            }
        })
        gsap.from('.little-heading span', {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#results',
                start: 'top 80%'
            }
        })
        gsap.from('.right-half span', {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#results',
                start: 'top 80%'
            }
        })
    }, [])
    return (
        <section id="results">
            <div className='px-12'>
                <h4 className="font-[fontlight] text-lg flex gap-1 ">
                    <img src="/star.svg" alt="star" width={13} />
                    <p className='little-heading'>
                        <span>Impact </span>
                        <span>Made </span>
                        <span>Visible</span>
                    </p>
                </h4>
            </div>

            <div className="heading-section w-full flex justify-between px-12 mt-2">
                <div className="results-heading w-1/2 flex flex-col font-[fontlight] text-[4vw] leading-[4.2vw] tracking-tighter perspective-distant">
                    <span>From bold ideas to</span>
                    <span>results that truly matter</span>
                </div>
                <div className="paragraph w-1/2 flex">
                    <div className="left-half w-[30%]"></div>
                    <div className="right-half flex flex-col w-[70%] text-[#929191] font-[fontlighter]">
                        <span>We build brands that speak with clarity and confidence. Every identity</span>
                        <span>and digital experience we create is shaped with strategic intent and</span>
                        <span>crafted to feel unforgettable. As a branding agency and design agency</span>
                        <span>we bring together brand identity design, creative direction, and future</span>
                        <span>focused web experiences to turn ambition into real market impact.</span>
                    </div>
                </div>
            </div>

            <Marquee />
        </section>
    )
}

export default Results