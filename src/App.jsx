import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllProjects from './components/AllProjects'

const Home = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
  </main>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
