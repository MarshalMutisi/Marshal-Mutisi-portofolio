import React from 'react'
import { ArrowUpRight, Check, Star } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Section, SectionHeading, Reveal, Tag } from './ui'
import { featuredProject as fp, projects } from '../data'

const LinkButton = ({ href, primary, children }) => (
    <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
            primary ? 'bg-fg text-bg hover:bg-zinc-200' : 'border border-line-strong text-fg hover:bg-white/5'
        }`}
    >
        {children}
    </a>
)

const FeaturedProject = () => (
    <Reveal>
        <article className='beam-border grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-2'>
            <div className='flex flex-col p-6 sm:p-10'>
                <div className='mb-5 flex flex-wrap items-center gap-3'>
                    <span className='inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-soft'>
                        <Star size={12} /> Featured · Latest
                    </span>
                    {fp.date && <span className='font-mono text-[11px] text-subtle'>{fp.date}</span>}
                </div>
                <h3 className='text-3xl font-semibold tracking-tight text-fg'>{fp.title}</h3>
                <p className='mt-3 leading-relaxed text-muted'>{fp.summary}</p>

                <ul className='mt-6 space-y-3'>
                    {fp.highlights.map((h) => (
                        <li key={h} className='flex gap-3 text-sm leading-relaxed text-muted'>
                            <Check size={16} className='mt-0.5 shrink-0 text-accent-soft' />
                            {h}
                        </li>
                    ))}
                </ul>

                <div className='mt-7 grid grid-cols-3 gap-3'>
                    {fp.metrics.map((m) => (
                        <div key={m.label} className='rounded-xl border border-line bg-white/[0.02] p-3'>
                            <p className='text-xl font-semibold tracking-tight text-fg'>{m.value}</p>
                            <p className='text-xs text-subtle'>{m.label}</p>
                        </div>
                    ))}
                </div>

                <div className='mt-7 flex flex-wrap gap-2'>
                    {fp.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                    ))}
                </div>

                <div className='mt-8 flex gap-3'>
                    <LinkButton href={fp.link} primary>
                        Live demo <ArrowUpRight size={15} />
                    </LinkButton>
                    {fp.github && (
                        <LinkButton href={fp.github}>
                            <SiGithub size={14} /> Source
                        </LinkButton>
                    )}
                </div>
            </div>

            <a
                href={fp.link}
                target='_blank'
                rel='noreferrer'
                className='group relative flex min-h-[260px] items-center overflow-hidden border-t border-line bg-surface-2 py-10 pl-8 sm:pl-10 lg:border-t-0 lg:border-l'
            >
                <div className='absolute inset-0 bg-linear-to-br from-accent/20 to-transparent' />
                <img
                    src={fp.image}
                    alt={`${fp.title} screenshot`}
                    className='relative w-[165%] max-w-none rounded-l-xl border border-line-strong shadow-2xl shadow-black/60 transition-transform duration-500 group-hover:-translate-x-3'
                />
            </a>
        </article>
    </Reveal>
)

const ProjectCard = ({ title, description, tags, github, link, image }) => (
    <article className='group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong'>
        <div className='relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2'>
            <img
                src={image}
                alt={`${title} screenshot`}
                loading='lazy'
                className='size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
            />
        </div>
        <div className='flex flex-1 flex-col p-6'>
            <h3 className='text-lg font-semibold tracking-tight text-fg'>{title}</h3>
            <p className='mt-2 flex-1 text-sm leading-relaxed text-muted'>{description}</p>
            <div className='mt-5 flex flex-wrap gap-1.5'>
                {tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                ))}
            </div>
            <div className='mt-6 flex gap-2'>
                {link && (
                    <LinkButton href={link} primary>
                        Live <ArrowUpRight size={15} />
                    </LinkButton>
                )}
                <LinkButton href={github}>
                    <SiGithub size={14} /> Code
                </LinkButton>
            </div>
        </div>
    </article>
)

const Projects = () => (
    <Section id='projects'>
        <SectionHeading
            eyebrow='04 · Projects'
            title='Selected work.'
            description='AI products, automation systems and full-stack apps, all deployed and running.'
        />

        <FeaturedProject />

        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.06} className='h-full'>
                    <ProjectCard {...p} />
                </Reveal>
            ))}
        </div>

        <Reveal className='mt-10 text-center'>
            <a
                href='https://github.com/MarshalMutisi?tab=repositories'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg'
            >
                See everything on GitHub <ArrowUpRight size={15} />
            </a>
        </Reveal>
    </Section>
)

export default Projects
