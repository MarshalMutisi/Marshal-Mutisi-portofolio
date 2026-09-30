import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { Mail } from 'lucide-react'
import { profile } from '../data'

const EASE = [0.21, 0.47, 0.32, 0.98]

export const Reveal = ({ children, delay = 0, y = 14, className }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay, ease: EASE }}
        className={className}
    >
        {children}
    </motion.div>
)

export const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 ${className}`}>
        {children}
    </section>
)

export const SectionHeading = ({ eyebrow, title, description }) => (
    <Reveal className='mb-12 max-w-2xl'>
        <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft'>{eyebrow}</p>
        <h2 className='text-3xl font-semibold tracking-tight text-fg sm:text-4xl'>{title}</h2>
        {description && <p className='mt-4 text-base leading-relaxed text-muted sm:text-lg'>{description}</p>}
    </Reveal>
)

export const Tag = ({ children }) => (
    <span className='rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted'>
        {children}
    </span>
)

export const socials = [
    { label: 'GitHub', href: profile.github, icon: SiGithub },
    { label: 'LinkedIn', href: profile.linkedin, icon: SiLinkedin },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export const SocialLinks = ({ className = '', size = 18 }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        {socials.map(({ label, href, icon: Icon }) => (
            <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel='noreferrer'
                aria-label={label}
                className='grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:bg-white/5 hover:text-fg'
            >
                <Icon size={size} />
            </a>
        ))}
    </div>
)
