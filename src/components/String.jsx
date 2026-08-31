import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const String = () => {
  const pathRef = useRef(null)
  const containerRef = useRef(null)
  const isAnimatingRef = useRef(true)
  const finalPosition = "M 10 100 Q 765 100 1510 100"

  const { contextSafe } = useGSAP(() => {
    gsap.fromTo(
      pathRef.current, 
      {
        attr: { d: 'M 10 100 Q 765 100 200 100' },
        opacity: 0
      },
      {
        attr: { d: finalPosition },
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
        },
        onComplete: () => {
          isAnimatingRef.current = false
        }
      }
    )
  }, [])

  const handleMouseMove = contextSafe((e) => {
    if (isAnimatingRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newPath = `M 10 100 Q ${x} ${y} 1510 100`

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
      overwrite: "auto"
    })
  })

  const handleMouseLeave = contextSafe(() => {
    if (isAnimatingRef.current) return

    gsap.to(pathRef.current, {
      attr: { d: finalPosition },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)",
      overwrite: "auto"
    })
  })

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="py-8"
    >
      <svg width="1535" height="200">
        <path 
          ref={pathRef} 
          d={finalPosition} 
          stroke="black" 
          fill="transparent" 
        />
      </svg>
    </div>
  )
}

export default String