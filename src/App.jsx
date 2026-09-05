import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Circle from "./components/Circle"
import Philosophy from "./sections/Philosophy"
import Images from "./sections/Images"
import String from "./components/String"
import Services from "./sections/Services"
import Results from "./sections/Results"
import LogoLoop from "./sections/LogoLoop"
import Journal from "./sections/Journal"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import { useState } from "react"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      {isLoading && <Preloader onComplete={() => { setIsLoading(false) }} />}
      <main className="w-full h-screen">
        <Circle />
        <Navbar isLoading={isLoading} />
        <Hero isLoading={isLoading} />
        <Projects isLoading={isLoading} />
        <Philosophy />
        <Images isLoading={isLoading} />
        <String />
        <Services />
        <String />
        <Results />
        <String />
        <LogoLoop />
        <Journal />
        <Footer />
      </main>
    </>
  )
}

export default App