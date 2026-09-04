import gsap from 'gsap'
import { navLinks, socials } from '../constants'
import Btn from './Btn'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useContext } from 'react'
import { footerContext } from '../context/FooterContext'
import { mailContext } from '../context/MailContext'

gsap.registerPlugin(ScrollTrigger, SplitText)
const Footer = () => {
    const [footerEntered, setFooterEntered] = useContext(footerContext);
    const [isMailHovered, setIsMailHovered] = useContext(mailContext)
    useGSAP(() => {
        const brandiumSplit = new SplitText('.brandium', { type: 'chars' })
        const agencySplit = new SplitText('.agency', { type: 'chars' })
        gsap.from(brandiumSplit.chars, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#footer',
                start: 'top 10%',
            },
            ease: 'linear'
        })
        gsap.from(agencySplit.chars, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#footer',
                start: 'top 10%',
            },
            ease: 'linear'
        })
    }, [])
    return (
        <footer onMouseEnter={() => {setFooterEntered(true)}} onMouseLeave={() => {setFooterEntered(false)}} id='footer' className='mt-64 bg-[#1B1B1C] text-white'>
            <div className="upper px-12 py-32 w-full flex justify-between">
                <div className="footer-left">
                    <h3 className='font-[fontlighter] text-[42px] leading-[46px]'>
                        Ready to turn your <br />
                        ideas into big moves?
                    </h3>

                    <div className='invert mt-6'>
                        <Btn text='Get in touch' />
                    </div>
                </div>
                <div className="footer-right flex justify-center gap-24 font-[fontlight]">
                    <div className="navLinks">
                        <h5 className='text-gray-300 text-sm uppercase'>Navigation</h5>
                        <ul className='mt-2'>
                            {navLinks.map((links, index) => (
                                <div key={index} className="group relative cursor-pointer">
                                    <img src="/footer-star.svg" alt="footer-star" width={13} className='absolute left-[-25px] top-2 scale-0 group-hover:scale-100 transition-transform duration-300' />
                                    <li className='text-lg group-hover:text-[#adff2f] transition-transform duration-300'>{links}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className="socials">
                        <h5 className='text-gray-300 text-sm uppercase'>Let's Connect</h5>
                        <ul className='mt-2'>
                            {socials.map((links, index) => (
                                <div key={index} className="group relative cursor-pointer">
                                    <img src="/footer-star.svg" alt="footer-star" width={13} className='absolute left-[-25px] top-2 scale-0 group-hover:scale-100 transition-transform duration-300' />
                                    <li className='text-lg group-hover:text-[#adff2f] transition-transform duration-300'>{links}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="address">
                        <h5 className='text-gray-300 text-sm uppercase'>Get in touch</h5>
                        <p className='text-lg mt-2 cursor-pointer'>020 210 1622</p>
                        <a href='mailto:yusuf.dev.pk@gmail.com' onMouseEnter={() => {setIsMailHovered(true)}} onMouseLeave={() => {setIsMailHovered(false)}} className='text-lg cursor-pointer'>yusuf.dev.pk@gmail.com</a>

                        <p className='text-lg mt-4'>Bos en Lommerplein 274</p>
                        <p className='text-lg cursor-pointer'>1055 RW Amsterdam</p>
                        <p className='text-lg cursor-pointer'>The Netherlands</p>
                    </div>
                </div>
            </div>

            <div className="lower mt-12 flex justify-center items-center gap-3 text-[195px] font-[fontlighter] overflow-hidden leading-[195px] pb-4">
                <p className="brandium">Brandium</p>
                <p className="agency">Agency</p>
            </div>
        </footer>
    )
}

export default Footer