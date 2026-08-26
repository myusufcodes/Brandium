import { useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Hero from "./sections/Hero"

const App = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(circleRef.current, {
        x: mouseX,
        y: mouseY,
        ease: 'power1.out'
      })
    })

    return () => window.removeEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (!mouseX && !mouseY) {
        circleRef.current.style.opacity = 0
      }
      gsap.to(circleRef.current, {
        x: mouseX,
        y: mouseY,
        ease: 'power1.out'
      })
    })
  }, [])


  return (
    <main className="w-full h-screen">
      <div ref={circleRef} className="circle absolute h-3 w-3 bg-[#1B1B1C] rounded-full"></div>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App