import React, { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initLenis } from './lib/lenis'

function App() {
    useEffect(() => initLenis(), [])

    return (
        <MotionConfig reducedMotion='user'>
            <div className='min-h-screen bg-bg text-fg'>
                <Navbar />
                <main>
                    <Hero />
                    <TechMarquee />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
            <Toaster theme='dark' position='bottom-right' richColors closeButton />
        </MotionConfig>
    )
}

export default App
