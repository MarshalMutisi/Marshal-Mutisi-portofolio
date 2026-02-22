import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'

import lingoImg from '../images/lingoacademic.png'
import n8nergeticImg from '../images/n8nergetic.png'
import workflowImg from '../images/workflow.png'
import learningImg from '../images/learning_path_tracker.png'
import notesImg from '../images/thinkpad.png'
import pizzaImg from '../images/pizza.png'

const ProjectCard = ({ title, description, tags, github, link, image }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className='glass rounded-2xl overflow-hidden flex flex-col h-full group'
    >
        <div className='relative h-[220px] overflow-hidden'>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                <a href={github} target="_blank" rel="noreferrer" className='p-3 bg-primary/80 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-all scale-0 group-hover:scale-100 duration-500'>
                    <AiOutlineGithub size={24} />
                </a>
                {link && link !== '#' && (
                    <a href={link} target="_blank" rel="noreferrer" className='p-3 bg-primary/80 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-all scale-0 group-hover:scale-100 duration-500 delay-75'>
                        <AiOutlineLink size={24} />
                    </a>
                )}
            </div>
        </div>
        <div className='p-6 flex-1 flex flex-col'>
            <h3 className='text-2xl font-bold mb-2 text-quaternary'>{title}</h3>
            <p className='text-tertiary mb-6 flex-1 line-clamp-3'>{description}</p>
            <div className='flex flex-wrap gap-2'>
                {tags.map((tag, i) => (
                    <span key={i} className='text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/20'>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
)

const Projects = () => {
    const projects = [
        {
            title: 'LingoAcademic AI',
            description: 'A premium agentic pipeline for English-German academic research. Features a 3-agent system (Librarian, Writer, Professor) with automatic model fallback.',
            tags: ['Next.js', 'FastAPI', 'Gemini AI', 'Multi-Agent', 'Python'],
            github: 'https://github.com/MarshalMutisi/LingoAcademic-AI',
            link: '#',
            image: lingoImg
        },

        {
            title: 'N8nergetic AI System',
            description: 'A robust monitoring and self-healing solution for n8n workflows. Uses a Gemini-powered Agentic AI Healer to automatically detect and fix workflow errors.',
            tags: ['n8n', 'AI Agent', 'Gemini API', 'Next.js', 'FastAPI'],
            github: 'https://github.com/MarshalMutisi/N8N-self-annealing',
            link: '#',
            image: n8nergeticImg
        },
        {
            title: 'AI Automation Workflow Suite',
            description: 'Designed AI-powered automation workflows including customer support using n8n, RAG pipelines, and webhooks.',
            tags: ['n8n', 'AI Agents', 'RAG', 'APIs'],
            github: 'https://github.com/marshal-mutisi',
            link: '#',
            image: workflowImg
        },
        {
            title: 'Learning Path Tracker',
            description: 'LMS for developers with authentication, real-time tracking, and analytics. Reduced effort by ~50%.',
            tags: ['React', 'Next.js', 'Vercel', 'Analytics'],
            github: 'https://github.com/MarshalMutisi/Learning-Path-Tracker',
            link: 'https://learning-path-tracker-39yo.vercel.app/',
            image: learningImg
        },
        {
            title: 'MERN Notes Application',
            description: 'Full-stack notes app with CRUD, REST API, middleware rate limiting, and responsive design.',
            tags: ['MongoDB', 'Express', 'React', 'Node'],
            github: 'https://github.com/MarshalMutisi/Thinkboard',
            link: 'https://thinkboard-web-lmtz.onrender.com',
            image: notesImg
        },
        {
            title: 'Next.js 15 Pizza Shop',
            description: 'Responsive e-commerce platform with authentication, cart management, and user profiles.',
            tags: ['Next.js 15', 'Tailwind', 'Auth', 'E-commerce'],
            github: 'https://github.com/MarshalMutisi/slice-hub',
            link: 'https://slice-hub-one.vercel.app',
            image: pizzaImg
        },
    ]

    return (
        <div className='max-w-[1200px] mx-auto py-12 sm:py-24 px-4' id='projects'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='mb-16'
            >
                <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Recent <span className='text-secondary'>Work</span></h2>
                <div className='w-20 h-1 bg-secondary rounded-full'></div>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects
