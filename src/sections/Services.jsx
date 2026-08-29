import React, { useEffect, useRef, useState } from 'react'
import Btn from '../components/Btn'
import { services } from '../constants'

const Services = () => {
    const [title, setTitle] = useState('')
    const brandRef = useRef(null);
    const webRef = useRef(null);
    const motionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (title === 'brand') {
            brandRef.current.style.opacity = '100%'
            brandRef.current.style.top = '0px'

            webRef.current.style.opacity = '0%'
            webRef.current.style.top = '100px'

            motionRef.current.style.opacity = '0%'
            motionRef.current.style.top = '100px'

            contentRef.current.style.opacity = '0%'
            contentRef.current.style.top = '100px'

        } else if (title === 'web') {
            webRef.current.style.opacity = '100%'
            webRef.current.style.top = '0px'

            brandRef.current.style.opacity = '0%'
            brandRef.current.style.top = '100px'

            motionRef.current.style.opacity = '0%'
            motionRef.current.style.top = '100px'

            contentRef.current.style.opacity = '0%'
            contentRef.current.style.top = '100px'
        } else if (title === 'motion') {
            motionRef.current.style.opacity = '100%'
            motionRef.current.style.top = '0px'

            webRef.current.style.opacity = '0%'
            webRef.current.style.top = '100px'

            brandRef.current.style.opacity = '0%'
            brandRef.current.style.top = '100px'

            contentRef.current.style.opacity = '0%'
            contentRef.current.style.top = '100px'
        } else if (title === 'content') {
            contentRef.current.style.opacity = '100%'
            contentRef.current.style.top = '0px'
            
            motionRef.current.style.opacity = '0%'
            motionRef.current.style.top = '100px'

            webRef.current.style.opacity = '0%'
            webRef.current.style.top = '100px'

            brandRef.current.style.opacity = '0%'
            brandRef.current.style.top = '100px'
        }
    })

    return (
        <section id="services" className='mt-12'>
            <div className="container w-full flex px-12 relative">
                <div className="left w-1/2">
                    <h5 className='flex gap-1 font-[fontlight] text-lg'>
                        <img src="/star.svg" alt="Star" width={13} />
                        How we help
                    </h5>
                    <p className='font-[fontlight] text-6xl tracking-tighter flex flex-col mt-1.5'>
                        <span>Everything your brand</span>
                        <span>needs to launch, grow</span>
                        <span>and thrive</span>
                    </p>
                </div>
                <div className="btn-container flex justify-end items-end w-1/2">
                    <Btn text='All Services' />
                </div>

            </div>
            <div className="services-details h-full px-12 flex gap-8 mt-16">
                <div className="image-container relative w-[25%] h-[350px] rounded-xl overflow-hidden">

                    <div className="img w-full h-full absolute inset-0">
                        <img src="/Services/s1.webp" alt="services" className='w-full h-full object-cover' />
                    </div>


                    <div ref={brandRef} className="img w-full h-full absolute opacity-0 transition-all duration-700">
                        <img src="/Services/s1.webp" alt="services" className='w-full h-full object-cover' />
                    </div>

                    <div ref={webRef} className="img w-full h-full absolute opacity-0 transition-all duration-700">
                        <img src="/Services/s2.webp" alt="services" className='w-full h-full object-cover' />
                    </div>

                    <div ref={motionRef} className="img w-full h-full absolute opacity-0 transition-all duration-700">
                        <img src="/Services/s3.webp" alt="services" className='w-full h-full object-cover' />
                    </div>

                    <div ref={contentRef} className="img w-full h-full absolute opacity-0 transition-all duration-700">
                        <img src="/Services/s4.jpg" alt="services" className='w-full h-full object-cover' />
                    </div>

                </div>

                <div className="services-list flex gap-16">
                    {services.map(({ title, services, imgTitle }, index) => (
                        <div
                            onMouseEnter={() => setTitle(imgTitle)}
                            onMouseLeave={() => setTitle('')}
                            key={index}
                            className='flex flex-col gap-2 font-[fontlighter] cursor-pointer'>
                            <h5>{title}</h5>
                            <ul className='text-[#929191]'>
                                {services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services