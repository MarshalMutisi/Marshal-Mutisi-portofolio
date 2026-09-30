import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data'
import { SocialLinks } from './ui'
import { getLenis, scrollToId } from '../lib/lenis'

const useActiveSection = (ids) => {
    const [active, setActive] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-45% 0px -50% 0px' }
        )
        ids.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [ids])

    return active
}

const sectionIds = ['home', ...navLinks.map((l) => l.id)]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const active = useActiveSection(sectionIds)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const lenis = getLenis()
        if (open) {
            lenis?.stop()
            document.body.style.overflow = 'hidden'
        } else {
            lenis?.start()
            document.body.style.overflow = ''
        }
    }, [open])

    const go = (e, id) => {
        e.preventDefault()
        setOpen(false)
        scrollToId(id)
    }

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled || open ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent'
            }`}
        >
            <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
                <a href='#home' onClick={(e) => go(e, 'home')} className='flex items-center gap-2.5'>
                    <span className='grid size-8 place-items-center rounded-lg bg-accent font-mono text-sm font-semibold text-white'>
                        MM
                    </span>
                    <span className='font-medium tracking-tight text-fg'>{profile.name}</span>
                </a>

                <ul className='hidden items-center gap-1 md:flex'>
                    {navLinks.map((link) => (
                        <li key={link.id} className='relative'>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => go(e, link.id)}
                                className={`relative z-10 block px-3.5 py-2 text-sm transition-colors ${
                                    active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                                }`}
                            >
                                {link.title}
                            </a>
                            {active === link.id && (
                                <motion.span
                                    layoutId='nav-pill'
                                    className='absolute inset-0 rounded-lg bg-white/[0.06]'
                                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                <a
                    href='#contact'
                    onClick={(e) => go(e, 'contact')}
                    className='hidden items-center gap-1 rounded-lg bg-fg px-3.5 py-2 text-sm font-medium text-bg transition-colors hover:bg-zinc-200 md:inline-flex'
                >
                    Let's talk <ArrowUpRight size={15} />
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    className='grid size-10 place-items-center rounded-lg border border-line text-fg md:hidden'
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className='h-[calc(100dvh-4rem)] border-t border-line bg-bg px-4 pt-6 pb-10 md:hidden'
                    >
                        <ul className='flex flex-col'>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * i }}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => go(e, link.id)}
                                        className='flex items-center justify-between border-b border-line py-4 text-2xl font-medium tracking-tight text-fg'
                                    >
                                        {link.title}
                                        <span className='font-mono text-xs text-subtle'>0{i + 1}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <SocialLinks className='mt-8' />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
