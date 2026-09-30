import React from 'react'
import {
    SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiNextdotjs, SiTypescript,
    SiPython, SiDocker, SiExpress, SiPostgresql, SiMysql, SiSpringboot, SiFastapi, SiLangchain,
    SiGooglegemini, SiSupabase, SiPhp, SiGit, SiVercel, SiRender, SiOpenai, SiAnthropic, SiClaude,
} from 'react-icons/si'
import { Aperture, Hexagon, Activity, GitBranch, Plug, Brain, Layout, Server, Database, Cloud, Workflow, Network, Layers, Zap } from 'lucide-react'
import { Section, SectionHeading, Reveal } from './ui'

const groups = [
    {
        title: 'AI & Automation',
        icon: Brain,
        blurb: 'Agents, retrieval and workflow automation.',
        wide: true,
        items: [
            { name: 'n8n', icon: Workflow },
            { name: 'LangChain', icon: SiLangchain },
            { name: 'LangGraph', icon: GitBranch },
            { name: 'MCP', icon: Plug },
            { name: 'LangSmith', icon: Activity },
            { name: 'RAG', icon: Layers },
            { name: 'Multi-Agent', icon: Network },
            { name: 'Gemini API', icon: SiGooglegemini },
            { name: 'Groq', icon: Zap },
            { name: 'OpenAI API', icon: SiOpenai },
            { name: 'Anthropic API', icon: SiAnthropic },
            { name: 'Claude Code', icon: SiClaude },
        ],
    },
    {
        title: 'Frontend',
        icon: Layout,
        blurb: 'Fast, accessible interfaces.',
        items: [
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'Tailwind', icon: SiTailwindcss },
        ],
    },
    {
        title: 'Backend',
        icon: Server,
        blurb: 'APIs and services.',
        items: [
            { name: 'Python', icon: SiPython },
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiExpress },
            { name: 'Spring Boot', icon: SiSpringboot },
            { name: 'PHP', icon: SiPhp },
        ],
    },
    {
        title: 'Databases',
        icon: Database,
        blurb: 'Relational, document and vector databases.',
        items: [
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'pgvector', icon: Layers },
            { name: 'ChromaDB', icon: Aperture },
            { name: 'Qdrant', icon: Hexagon },
            { name: 'Supabase', icon: SiSupabase },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'MySQL', icon: SiMysql },
        ],
    },
    {
        title: 'Cloud & DevOps',
        icon: Cloud,
        blurb: 'Shipping and running it.',
        items: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Git', icon: SiGit },
            { name: 'Vercel', icon: SiVercel },
            { name: 'Render', icon: SiRender },
        ],
    },
]

const Skills = () => (
    <Section id='skills'>
        <SectionHeading
            eyebrow='02 · Skills'
            title='A toolkit built around AI products.'
            description='From the model call to the database to the deploy, I work across the whole stack.'
        />

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {groups.map(({ title, icon: GroupIcon, blurb, items, wide }, i) => (
                <Reveal
                    key={title}
                    delay={i * 0.06}
                    className={`group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong ${
                        wide ? 'lg:col-span-2' : ''
                    }`}
                >
                    <div className='mb-5 flex items-start gap-3'>
                        <span className='grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-soft'>
                            <GroupIcon size={19} />
                        </span>
                        <div>
                            <h3 className='font-medium text-fg'>{title}</h3>
                            <p className='text-sm text-subtle'>{blurb}</p>
                        </div>
                    </div>
                    <ul className='flex flex-wrap gap-2'>
                        {items.map(({ name, icon: Icon }) => (
                            <li
                                key={name}
                                className='flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg'
                            >
                                <Icon size={15} />
                                {name}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </div>
    </Section>
)

export default Skills
