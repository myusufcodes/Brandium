import { useRef, useContext} from "react"
import Btn from "../components/Btn"
import { playSound } from "../components/Sound"
import { projects } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { circleContext } from "../context/Circlecontext"

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
    const [isHovered, setIsHovered] = useContext(circleContext)
    const projectRef = useRef(null)
    useGSAP(() => {
        gsap.fromTo('.first-projects',
            { clipPath: 'inset(15% 0% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                ease: 'none'
            }
        )

        gsap.fromTo('.animated-projects',
            { clipPath: 'inset(25% 0% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: 'top -20%'
                }
            }
        )
    })
    return (
        <section id="projects" className="mt-24">
            <div ref={projectRef} className="projects-container w-full px-12 flex flex-col gap-8 overflow-hidden">
                {projects.map(({ project1, project2 }, index) => {
                    return (
                        <div key={index} className={`project-pair ${index === 1 ? 'animated-projects' : 'first-projects'} flex justify-center items-center gap-8 origin-bottom`}>
                            <div
                                onMouseEnter={() => {
                                    playSound()
                                    setIsHovered(true)
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false)
                                }}
                                className="project-1 w-1/2">
                                <div className="image-container h-[650px] overflow-hidden">
                                    <img src={`/projects/${project1.img}`} alt="Project" className="w-full h-full object-cover" />
                                </div>
                                <div className="info flex justify-between items-center w-full mt-2">
                                    <div className="title text-2xl font-[fontlight]">{project1.title}</div>
                                    <ul className="flex justify-center items-center gap-2 font-[fontlighter] text-[12px]">
                                        {project1.tags.map((tag, index) => (
                                            <li key={index} className="bg-[#F9F9F9] px-4 py-2 text-[#929191]">{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div
                                onMouseEnter={() => {
                                    playSound()
                                    setIsHovered(true)
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false)
                                }}
                                className="project-2 w-1/2">
                                <div className="image-container h-[650px] overflow-hidden">
                                    <img src={`/projects/${project2.img}`} alt="Project" className="w-full h-full object-cover" />
                                </div>
                                <div className="info flex justify-between items-center w-full mt-2">
                                    <div className="title text-2xl font-[fontlight]">{project2.title}</div>
                                    <ul className="flex justify-center items-center gap-2 font-[fontlighter] text-[12px]">
                                        {project2.tags.map((tag, index) => (
                                            <li key={index} className="bg-[#F9F9F9] px-4 py-2 text-[#929191]">{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="btn-container flex justify-center items-center mt-12">
                <Btn text="View our work" />
            </div>
        </section>
    )
}

export default Projects