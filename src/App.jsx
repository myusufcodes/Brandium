import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Circle from "./components/Circle"
import Philosophy from "./sections/Philosophy"
import Images from "./sections/Images"

const App = () => {
  return (
    <main className="w-full h-screen">
      <Circle />
      <Navbar />
      <Hero />
      <Projects />
      <Philosophy />
      <Images />
    </main>
  )
}

export default App