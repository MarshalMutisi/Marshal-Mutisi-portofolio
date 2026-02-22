import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto min-h-screen py-12 md:py-0 flex flex-col-reverse md:flex-row justify-center items-center gap-12' id='home'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='flex-1 text-center md:text-left'
            >
                <p className='text-secondary font-mono mb-4 text-lg sm:text-xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold mb-4'>Marshal Mutisi</h1>
                <h2 className='text-3xl sm:text-6xl font-bold text-tertiary mb-8'>
                    I'm an{' '}
                    <TypeAnimation
                        sequence={[
                            'AI Automation Developer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            'Computer Science Student',
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className='text-secondary'
                    />
                </h2>
                <p className='text-tertiary max-w-[600px] mb-12 text-lg'>
                    Computer Science student and aspiring AI Automation Developer with experience
                    in full-stack web development and database systems, focused on building smart,
                    efficient, and AI-driven digital solutions.
                </p>

                <div className='flex items-center justify-center md:justify-start gap-6 text-3xl mb-12'>
                    <a href="https://github.com/MarshalMutisi" target="_blank" rel="noreferrer" className='hover:text-secondary transition-all hover:-translate-y-1'><AiOutlineGithub /></a>
                    <a href="https://linkedin.com/in/marshal-mutisi-34a07a298" target="_blank" rel="noreferrer" className='hover:text-secondary transition-all hover:-translate-y-1'><AiOutlineLinkedin /></a>
                    <a href="mailto:mutisimarshal@gmail.com" className='hover:text-secondary transition-all hover:-translate-y-1'><AiOutlineMail /></a>
                </div>

                <a href="#projects" className='inline-block px-8 py-4 rounded-lg bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 transition-all font-bold'>
                    Check out my work
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className='flex-1 flex justify-center'
            >
                <div className='relative w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] shadow-2xl shadow-secondary/10 rounded-full overflow-hidden border-4 border-secondary/20'>
                    <div className='w-full h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-secondary/20 flex items-center justify-center'>
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className='text-8xl text-secondary'
                        >
                            👨‍💻
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
