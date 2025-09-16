import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {


  return (
    <>
      <div className="stars"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
