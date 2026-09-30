import React from 'react'
import { Section, SectionHeading, Reveal, Tag } from './ui'
import { experiences } from '../data'

const Experience = () => (
    <Section id='experience'>
        <SectionHeading eyebrow='03 · Experience' title='Where I have worked.' />

        <ol className='relative space-y-8 border-l border-line pl-8 sm:pl-10'>
            {experiences.map((exp, i) => (
                <li key={exp.company} className='relative'>
                    <Reveal delay={i * 0.08}>
                        <span className='absolute top-2 -left-[37px] grid size-3 place-items-center rounded-full bg-accent ring-4 ring-bg sm:-left-[45px]' />

                        <div className='rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8'>
                            <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                                <div>
                                    <h3 className='text-xl font-semibold tracking-tight text-fg'>{exp.role}</h3>
                                    <p className='mt-1 text-accent-soft'>{exp.company}</p>
                                </div>
                                <span className='shrink-0 font-mono text-xs text-subtle sm:pt-1.5'>{exp.duration}</span>
                            </div>

                            <p className='mt-4 leading-relaxed text-muted'>{exp.description}</p>

                            <ul className='mt-5 space-y-2.5'>
                                {exp.responsibilities.map((item) => (
                                    <li key={item} className='flex gap-3 text-sm leading-relaxed text-muted'>
                                        <span className='mt-2 size-1 shrink-0 rounded-full bg-accent-soft' />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className='mt-6 flex flex-wrap gap-2'>
                                {exp.tags.map((t) => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </li>
            ))}
        </ol>
    </Section>
)

export default Experience
