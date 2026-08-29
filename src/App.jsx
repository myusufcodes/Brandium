import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Circle from "./components/Circle"
import Philosophy from "./sections/Philosophy"
import Images from "./sections/Images"
import String from "./components/String"

const App = () => {
  return (
    <main className="w-full h-screen">
      <Circle />
      <Navbar />
      <Hero />
      <Projects />
      <Philosophy />
      <Images />
      <String top='top 50%' />
    </main>
  )
}

export default App