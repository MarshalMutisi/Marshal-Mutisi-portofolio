import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const navLinks = [
        { title: 'Home', path: '#home' },
        { title: 'About', path: '#about' },
        { title: 'Experience', path: '#experience' },
        { title: 'Projects', path: '#projects' },
        { title: 'Contact', path: '#contact' },
    ]

    return (
        <div className='fixed left-0 top-0 w-full z-50 glass h-[80px] px-4 sm:px-12 flex justify-between items-center text-white'>
            <motion.h1
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='text-3xl font-bold text-secondary cursor-pointer tracking-tighter'
            >
                MARSHAL
            </motion.h1>

            <ul className='hidden md:flex'>
                {navLinks.map((link, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='p-5 cursor-pointer hover:text-secondary transition-colors duration-300'
                    >
                        <a href={link.path}>{link.title}</a>
                    </motion.li>
                ))}
            </ul>

            <div onClick={handleNav} className='z-50 block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <motion.div
                animate={nav ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className='fixed right-0 top-0 w-[60%] h-full bg-[#0a192f] border-l border-white/10 z-40 flex flex-col items-center justify-center'
            >
                <ul className='text-2xl space-y-8'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='p-2 cursor-pointer hover:text-secondary' onClick={() => setNav(false)}>
                            <a href={link.path}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default Navbar
