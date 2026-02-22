import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineHome, AiOutlineUser, AiOutlineCode, AiOutlineSend, AiOutlineThunderbolt } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const navLinks = [
        { title: 'Home', path: '#home', icon: <AiOutlineHome /> },
        { title: 'About', path: '#about', icon: <AiOutlineUser /> },
        { title: 'Experience', path: '#experience', icon: <AiOutlineThunderbolt /> },
        { title: 'Projects', path: '#projects', icon: <AiOutlineCode /> },
        { title: 'Contact', path: '#contact', icon: <AiOutlineSend /> },
    ]

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    const itemVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: 50 }
    }

    return (
        <div className={`fixed left-0 top-0 w-full ${nav ? 'z-[100] bg-[#0a192f]' : 'z-50 glass'} h-[80px] px-4 sm:px-12 flex justify-between items-center text-white transition-all duration-300`}>
            <motion.h1
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='text-2xl sm:text-3xl font-bold text-secondary cursor-pointer tracking-tighter'
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

            <div onClick={handleNav} className='z-[110] block md:hidden cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors'>
                {nav ? <AiOutlineClose size={30} className='text-secondary' /> : <AiOutlineMenu size={30} />}
            </div>

            <AnimatePresence>
                {nav && (
                    <motion.div
                        variants={menuVariants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        className='fixed inset-0 w-full h-screen bg-[#0a192f] z-[100] flex flex-col items-center justify-between py-24 px-8 md:hidden'
                    >
                        {/* Header for Mobile Menu */}
                        <div className='absolute top-6 right-6'>
                            <AiOutlineClose
                                size={32}
                                className='cursor-pointer text-secondary hover:rotate-90 transition-transform duration-300'
                                onClick={() => setNav(false)}
                            />
                        </div>

                        <ul className='flex flex-col items-center justify-center gap-10 w-full flex-1'>
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className='cursor-pointer group flex items-center gap-6'
                                    onClick={() => setNav(false)}
                                >
                                    <span className='text-secondary text-3xl group-hover:scale-125 transition-transform duration-300'>
                                        {link.icon}
                                    </span>
                                    <a href={link.path} className='font-bold tracking-[0.2em] group-hover:text-secondary transition-colors uppercase text-2xl'>
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            variants={itemVariants}
                            className='flex flex-col items-center gap-10 w-full mt-auto pb-10'
                        >
                            <div className='w-full h-px bg-white/10 max-w-[200px]' />
                            <div className='flex flex-row items-center justify-center space-x-12 text-tertiary'>
                                <a href="https://github.com/MarshalMutisi" target="_blank" rel="noreferrer" className='hover:text-secondary transition-all transform hover:scale-125 shrink-0'>
                                    <AiOutlineGithub size={45} />
                                </a>
                                <a href="https://linkedin.com/in/marshal-mutisi-34a07a298" target="_blank" rel="noreferrer" className='hover:text-secondary transition-all transform hover:scale-125 shrink-0'>
                                    <AiOutlineLinkedin size={45} />
                                </a>
                                <a href="mailto:mutisimarshal@gmail.com" className='hover:text-secondary transition-all transform hover:scale-125 shrink-0'>
                                    <AiOutlineMail size={45} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar
