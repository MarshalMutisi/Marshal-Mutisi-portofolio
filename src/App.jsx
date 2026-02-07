import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="bg-[#0a192f] text-[#ccd6f6] min-h-screen">
            <Navbar />
            <div className='pt-[80px]'>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
