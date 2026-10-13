import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mail, Bot, Database, UserCheck, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data'
import { SocialLinks } from './ui'
import { scrollToId } from '../lib/lenis'

const steps = [
    { icon: Mail, label: 'Customer email received', meta: 'inbox → webhook' },
    { icon: Bot, label: 'Classify & extract', meta: 'LangGraph · intent · key details' },
    { icon: Database, label: 'Check CRM & policy', meta: 'MCP tools · RAG (pgvector)' },
    { icon: UserCheck, label: 'Human approval', meta: 'only if uncertain or sensitive' },
    { icon: Send, label: 'Ticket, update & reply', meta: 'every step logged to dashboard' },
]

const PipelineCard = () => {
    const reduce = useReducedMotion()
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (reduce) return
        const id = setInterval(() => setActive((a) => (a + 1) % (steps.length + 1)), 1100)
        return () => clearInterval(id)
    }, [reduce])

    const done = active === steps.length

    return (
        <div className='beam-border relative w-full max-w-md rounded-2xl border border-line bg-surface/80 shadow-2xl shadow-black/50 backdrop-blur'>
            <div className='flex items-center gap-2 border-b border-line px-4 py-3'>
                <span className='size-2.5 rounded-full bg-zinc-700' />
                <span className='size-2.5 rounded-full bg-zinc-700' />
                <span className='size-2.5 rounded-full bg-zinc-700' />
                <span className='ml-2 font-mono text-xs text-subtle'>ai-business-workflow</span>
                <span className='ml-auto flex items-center gap-1.5 font-mono text-[11px] text-emerald-400'>
                    <span className='size-1.5 animate-pulse rounded-full bg-emerald-400' /> live
                </span>
            </div>

            <ol className='relative space-y-3 p-5'>
                <span className='absolute top-9 bottom-9 left-[42px] w-px bg-line' aria-hidden />
                {steps.map(({ icon: Icon, label, meta }, i) => {
                    const isActive = i === active
                    const isDone = i < active
                    return (
                        <li
                            key={label}
                            className={`relative flex items-center gap-4 rounded-xl border px-3 py-3 transition-all duration-500 ${
                                isActive ? 'border-accent/50 bg-accent/10' : 'border-line bg-white/[0.02]'
                            }`}
                        >
                            <span
                                className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-lg border transition-colors duration-500 ${
                                    isActive
                                        ? 'border-accent bg-accent text-white'
                                        : isDone
                                          ? 'border-accent/40 bg-surface-2 text-accent-soft'
                                          : 'border-line bg-surface-2 text-subtle'
                                }`}
                            >
                                <Icon size={17} />
                            </span>
                            <div className='min-w-0'>
                                <p className={`text-sm font-medium ${isActive || isDone ? 'text-fg' : 'text-muted'}`}>{label}</p>
                                <p className='truncate font-mono text-[11px] text-subtle'>{meta}</p>
                            </div>
                            {isDone && <CheckCircle2 size={16} className='ml-auto shrink-0 text-accent-soft' />}
                        </li>
                    )
                })}
            </ol>

            <div className='flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[11px]'>
                <a
                    href='#projects'
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToId('projects')
                    }}
                    className='text-subtle transition-colors hover:text-accent-soft'
                >
                    view project →
                </a>
                <span className={`transition-colors duration-300 ${done ? 'text-emerald-400' : 'text-subtle'}`}>
                    {done ? '✓ completed in 1.2s' : 'running…'}
                </span>
            </div>
        </div>
    )
}

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08 * i, ease: [0.21, 0.47, 0.32, 0.98] } }),
}

const Hero = () => (
    <section id='home' className='relative overflow-hidden'>
        <div className='bg-grid pointer-events-none absolute inset-0' aria-hidden />
        <div
            className='pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]'
            aria-hidden
        />

        <div className='relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-32 pb-20 sm:px-6 md:pt-40 lg:grid-cols-[1.15fr_1fr] lg:pb-28'>
            <motion.div initial='hidden' animate='show'>
                <motion.div
                    variants={fadeUp}
                    custom={0}
                    className='mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted'
                >
                    <span className='relative flex size-2'>
                        <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60' />
                        <span className='relative inline-flex size-2 rounded-full bg-emerald-400' />
                    </span>
                    Open to new opportunities
                </motion.div>

                <motion.p variants={fadeUp} custom={1} className='mb-4 font-mono text-sm text-accent-soft'>
                    {profile.name} · {profile.role}
                </motion.p>

                <motion.h1
                    variants={fadeUp}
                    custom={2}
                    className='text-4xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-6xl'
                >
                    I build AI agents and automation{' '}
                    <span className='bg-linear-to-r from-accent-soft via-violet-300 to-fuchsia-300 bg-clip-text text-transparent'>
                        that actually ship.
                    </span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={3} className='mt-6 max-w-xl text-lg leading-relaxed text-muted'>
                    Final-year BSc Computer Science student and software developer who ships full-stack, AI-powered
                    systems end to end, from system design and implementation through testing, evaluation, deployment
                    and monitoring. Builds production LLM agents and automated workflows, backed by six months of
                    professional full-stack experience on live client projects.
                </motion.p>

                <motion.div variants={fadeUp} custom={4} className='mt-10 flex flex-wrap items-center gap-3'>
                    <a
                        href='#projects'
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToId('projects')
                        }}
                        className='group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-colors hover:bg-indigo-500'
                    >
                        View my work
                        <ArrowRight size={16} className='transition-transform group-hover:translate-x-0.5' />
                    </a>
                    {profile.cvUrl ? (
                        <a
                            href={profile.cvUrl}
                            download
                            className='inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:bg-white/5'
                        >
                            <Download size={16} /> Download CV
                        </a>
                    ) : (
                        <a
                            href='#contact'
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToId('contact')
                            }}
                            className='inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:bg-white/5'
                        >
                            Get in touch
                        </a>
                    )}
                    <SocialLinks className='sm:ml-2' />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className='flex justify-center lg:justify-end'
            >
                <PipelineCard />
            </motion.div>
        </div>
    </section>
)

export default Hero
