import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Marquee_1 from '../components/logoloop/Marquee_1'
import Marquee_2 from '../components/logoloop/Marquee_2'

const LogoLoop = () => {
    useGSAP(() => {
        gsap.from('.big-heading span', {
            rotateX: -75,
            color: '#adff2f',
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#logoloop',
                start: 'top 80%'
            }
        })
        gsap.from('.star-heading span', {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#logoloop',
                start: 'top 80%'
            }
        })

        window.addEventListener('wheel', (dets) => {
            if (dets.deltaY > 0) {
                gsap.to('.logo-marquee-1', {
                    transform: 'translateX(100%)',
                    duration: 20,
                    repeat: -1
                })
            } else {
                gsap.to('.logo-marquee-1', {
                    transform: 'translateX(-100%)',
                    duration: 20,
                    repeat: -1
                })
            }
        })

        window.addEventListener('wheel', (dets) => {
            if (dets.deltaY > 0) {
                gsap.to('.logo-marquee-2', {
                    transform: 'translateX(-100%)',
                    duration: 20,
                    repeat: -1
                })
            } else {
                gsap.to('.logo-marquee-2', {
                    transform: 'translateX(100%)',
                    duration: 20,
                    repeat: -1
                })
            }
        })
    }, [])
    return (
        <section id="logoloop">
            <div className='flex justify-center items-center gap-1'>
                <img src="/star.svg" alt="star" width={13} />
                <p className="star-heading font-[fontlighter] text-lg">
                    <span>Family </span>
                    <span>and </span>
                    <span>Brands</span>
                </p>
            </div>
            <div className='big-heading font-[fontlight] flex flex-col justify-center items-center mt-2 text-[65px] leading-[65px]'>
                <span>Story worth telling,</span>
                <span>brands worth building</span>
            </div>
            <div className="logo-marquee-container flex flex-col gap-24 mt-16">
                <div className="logo-marquee-1 flex gap-32 justify-center items-center">
                    <Marquee_1 />
                    <Marquee_1 />
                    <Marquee_1 />
                    <Marquee_1 />
                    <Marquee_1 />
                    <Marquee_1 />
                    <Marquee_1 />
                    <Marquee_1 />
                </div>

                <div className="logo-marquee-2 flex gap-32 justify-center items-center">
                    <Marquee_2 />
                    <Marquee_2 />
                    <Marquee_2 />
                    <Marquee_2 />
                    <Marquee_2 />
                    <Marquee_2 />
                    <Marquee_2 />
                    <Marquee_2 />
                </div>
            </div>
        </section>
    )
}

export default LogoLoop