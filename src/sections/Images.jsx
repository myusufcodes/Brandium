import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useState, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Images = ({ isLoading }) => {
    const [imageIndex, setImageIndex] = useState(1)
    const containerRef = useRef(null)
    const totalImages = 7

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex % totalImages) + 1)
        }, 800)

        return () => clearInterval(interval)
    }, [totalImages])

    useGSAP(() => {
        if (isLoading) return

        ScrollTrigger.refresh()

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
    }, { dependencies: [isLoading], scope: containerRef })

    return (
        <section id="images" ref={containerRef} className='mt-12 flex justify-center items-center h-full'>
            <div className="images-container w-[95%] h-[95%] rounded-xl overflow-hidden">
                <img 
                    key={imageIndex}
                    src={`/images/img${imageIndex}.webp`} 
                    alt="images" 
                    className='w-full h-full object-cover' 
                />
            </div>
        </section>
    )
}

export default Images