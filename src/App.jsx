import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Circle from "./components/Circle"

const App = () => {
  return (
    <main className="w-full h-screen">
      <Circle />
      <Navbar />
      <Hero />
      <Projects />
    </main>
  )
}

export default App