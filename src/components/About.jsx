import React from 'react'
import { Sparkles, GraduationCap, Briefcase } from 'lucide-react'
import { Section, SectionHeading, Reveal } from './ui'
import { projects } from '../data'

const stats = [
    { value: `${projects.length + 1}`, label: 'Shipped projects' },
    { value: '6 mo', label: 'Industry experience' },
    { value: '20+', label: 'Technologies' },
]

const facts = [
    { icon: Sparkles, label: 'Focus', value: 'AI automation & agentic systems' },
    { icon: GraduationCap, label: 'Education', value: "Bachelor's in Computer Science" },
    { icon: Briefcase, label: 'Most recently', value: 'Full Stack Intern, Landsiedel NLP Training' },
]

const About = () => (
    <Section id='about'>
        <SectionHeading eyebrow='01 · About' title='Engineering practical AI, end to end.' />

        <div className='grid gap-10 lg:grid-cols-[1.4fr_1fr]'>
            <Reveal className='space-y-5 text-lg leading-relaxed text-muted'>
                <p>
                    I'm a Software Developer and AI Automation Engineer with a{' '}
                    <span className='text-fg'>Bachelor's degree in Computer Science</span>. I build full-stack and
                    AI-powered applications end to end, from system design and implementation through testing,
                    evaluation, deployment and monitoring.
                </p>
                <p>
                    My focus is <span className='text-fg'>workflow automation and generative AI</span>: agents built
                    with LangGraph and MCP, RAG pipelines and n8n workflows, backed by working knowledge of cloud
                    computing. I also spent six months as a full-stack intern at Landsiedel NLP Training, shipping
                    PHP/MySQL web apps for an international website.
                </p>
                <p>
                    I care about software that runs <span className='text-fg'>cheaply and reliably</span>, like fitting
                    a full RAG application into 512MB of RAM so it can live on a free hosting tier.
                </p>
            </Reveal>

            <Reveal delay={0.1} className='space-y-4'>
                <div className='grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface'>
                    {stats.map((s) => (
                        <div key={s.label} className='p-5 text-center'>
                            <p className='text-2xl font-semibold tracking-tight text-fg sm:text-3xl'>{s.value}</p>
                            <p className='mt-1 text-xs text-subtle'>{s.label}</p>
                        </div>
                    ))}
                </div>
                <ul className='divide-y divide-line rounded-2xl border border-line bg-surface'>
                    {facts.map(({ icon: Icon, label, value }) => (
                        <li key={label} className='flex items-center gap-4 p-4'>
                            <span className='grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-soft'>
                                <Icon size={17} />
                            </span>
                            <div>
                                <p className='font-mono text-[11px] uppercase tracking-wider text-subtle'>{label}</p>
                                <p className='text-sm text-fg'>{value}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </div>
    </Section>
)

export default About
