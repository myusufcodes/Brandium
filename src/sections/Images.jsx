import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useState } from "react"

gsap.registerPlugin(ScrollTrigger)
const Images = () => {
    const [imageIndex, setImageIndex] = useState(1)
    const totalImages = 7

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((imageIndex % totalImages) + 1)
        }, 800);

        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        gsap.fromTo('.images-container',
            {
                clipPath: 'inset(30% round 30px)'
            },
            {
                clipPath: 'inset(0% round 12px)',
                scrollTrigger: {
                    trigger: '#images',
                    start: 'top top',
                    scrub: 2,
                    pin: true
                }
            }
        )
    }, [])
    return (
        <section id="images" className='mt-12 flex justify-center items-center h-full'>
            <div className="images-container w-[95%] h-[95%] rounded-xl overflow-hidden">
                <img src={`/images/img${imageIndex}.webp`} alt="images" className='w-full h-full object-cover' />
            </div>
        </section>
    )
}

export default Images