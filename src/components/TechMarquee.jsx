import React from 'react'
import {
    SiPython, SiTypescript, SiReact, SiNextdotjs, SiFastapi, SiLangchain, SiGooglegemini,
    SiSupabase, SiPostgresql, SiDocker, SiNodedotjs, SiMongodb, SiTailwindcss, SiVercel,
} from 'react-icons/si'
import { Workflow } from 'lucide-react'

const logos = [
    { icon: SiPython, name: 'Python' },
    { icon: SiLangchain, name: 'LangChain' },
    { icon: Workflow, name: 'n8n' },
    { icon: SiGooglegemini, name: 'Gemini' },
    { icon: SiFastapi, name: 'FastAPI' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiReact, name: 'React' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiSupabase, name: 'Supabase' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiVercel, name: 'Vercel' },
]

const TechMarquee = () => (
    <div className='border-y border-line bg-surface/40 py-6'>
        <p className='mb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-subtle'>
            Tools I ship with
        </p>
        <div className='mask-fade-x group overflow-hidden'>
            <div className='flex w-max animate-marquee group-hover:[animation-play-state:paused]'>
                {[...logos, ...logos].map(({ icon: Icon, name }, i) => (
                    <div
                        key={i}
                        aria-hidden={i >= logos.length}
                        className='flex items-center gap-2.5 px-7 text-subtle transition-colors hover:text-fg'
                    >
                        <Icon size={20} />
                        <span className='text-sm font-medium whitespace-nowrap'>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default TechMarquee
