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

const App = () => {
  return (
    <main className="w-full h-screen">
      <Circle />
      <Navbar />
      <Hero />
      <Projects />
      <Philosophy />
      <Images />
      <String />
      <Services />
      <String />
      <Results />
      <String />
      <LogoLoop />
      <Journal />
    </main>
  )
}

export default App