import gsap from "gsap"
import Btn from "../components/Btn"
import { articles } from "../constants"
import { useGSAP } from "@gsap/react"

const Journal = () => {

    useGSAP(() => {
        gsap.from('.journal-left-heading', {
            rotateX: -75,
            color: '#adff2f',
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#journal',
                start: 'top 80%'
            }
        })
        gsap.from('.little span', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#journal',
                start: 'top 80%'
            }
        })
    }, [])

    return (
        <section id="journal" className="mt-72 px-12">
            <div className="flex gap-1">
                <img src="/star.svg" alt="star" width={13} />
                <p className="little font-[fontlight] text-lg">
                    <span>Our </span>
                    <span>Journal</span>
                </p>
            </div>
            <div className="flex w-full">
                <div className="journal-left-heading font-[fontlight] mt-2 text-[65px] leading-[65px] w-1/2">
                    News & Updates
                </div>

                <div className="right-btn w-1/2 flex justify-end items-end">
                    <Btn text="Browse all articles" />
                </div>
            </div>

            <div className="articles-container w-full flex justify-center items-center gap-8 mt-16">
                {articles.map((article, index) => (
                    <div key={index} className="card w-1/3 h-[585px]">
                        <div className="group media relative h-[450px] overflow-hidden rounded-xl">
                            {article.media.type === 'img'
                                ?
                                (<img src={article.media.src} alt={article.title} className="group-hover:scale-105 cursor-pointer w-full h-full object-cover transition-transform duration-200" />)
                                :
                                (<video src={article.media.src} alt={article.title} autoPlay muted loop className="w-full cursor-pointer h-full object-cover" />)
                            }

                            <div className="readtime&date flex gap-4 absolute bottom-2 left-2 text-sm font-[fontlighter]">
                                <span className="bg-white/30 backdrop-blur-md text-white px-2 py-1 rounded-md">{article.readTime}</span>
                                <span className="bg-white/30 backdrop-blur-md text-white px-2 py-1 rounded-md">{article.date}</span>
                            </div>
                        </div>

                        <div className="title font-[fontlight] text-[34px] leading-[40px] mt-4">
                            {article.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Journal