import aiWorkflowImg from './images/ai-business-workflow.png'
import cvCopilotImg from './images/cv-copilot.png'
import lingoImg from './images/lingoacademic.png'
import n8nergeticImg from './images/n8nergetic.png'
import workflowImg from './images/workflow.png'
import learningImg from './images/learning_path_tracker.png'
import notesImg from './images/thinkpad.png'
import pizzaImg from './images/pizza.png'

export const profile = {
    name: 'Marshal Mutisi',
    role: 'Software Developer & AI Automation Engineer',
    email: 'mutisimarshal@gmail.com',
    phone: '+263 789 773 927',
    github: 'https://github.com/MarshalMutisi',
    linkedin: 'https://linkedin.com/in/marshal-mutisi-34a07a298',
    // CV lives in /public; set to null to hide the "Download CV" button in the hero.
    cvUrl: '/Marshal-Mutisi-latest-Resume.pdf',
}

export const navLinks = [
    { title: 'About', id: 'about' },
    { title: 'Skills', id: 'skills' },
    { title: 'Experience', id: 'experience' },
    { title: 'Projects', id: 'projects' },
    { title: 'Contact', id: 'contact' },
]

export const featuredProject = {
    title: 'AI Business Workflow Agent',
    date: 'Aug 2026 – Sep 2026',
    summary: 'An AI agent that handles customer emails end to end: it classifies each email, extracts the key details, checks the CRM and company policy, then creates tickets, updates records and drafts a reply.',
    highlights: [
        'LangGraph agent that classifies, extracts and plans, using MCP tools to check the CRM and company policy',
        'Human-in-the-loop approval for uncertain or sensitive cases before anything is sent',
        'Every step logged, traced with LangSmith and shown on a live admin dashboard',
    ],
    metrics: [
        { value: 'End-to-end', label: 'email handling' },
        { value: 'HITL', label: 'approval gate' },
        { value: 'Live', label: 'ops dashboard' },
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'MCP', 'RAG (pgvector)', 'Supabase', 'n8n', 'LangSmith', 'Next.js', 'Docker'],
    github: 'https://github.com/MarshalMutisi/Al-Business-workflow',
    link: 'https://al-business-workflow-2.onrender.com/',
    image: aiWorkflowImg,
}

export const projects = [
    {
        title: 'CV Copilot',
        description: 'AI job-application assistant: RAG over your own CV, a job-match analyzer that scores fit and drafts cover letters, and an application tracker. Runs in under 512MB RAM.',
        tags: ['Next.js', 'FastAPI', 'LangChain', 'RAG', 'pgvector'],
        github: 'https://github.com/MarshalMutisi/CV-Copilot',
        link: 'https://cv-copilot-2.onrender.com',
        image: cvCopilotImg,
    },
    {
        title: 'LingoAcademic AI',
        description: 'Agentic pipeline for English–German academic research. Three agents (Librarian, Writer, Professor) collaborate, with automatic model fallback.',
        tags: ['Next.js', 'FastAPI', 'Gemini', 'Multi-Agent'],
        github: 'https://github.com/MarshalMutisi/LingoAcademic-AI',
        link: 'https://lingoacademic-ai.onrender.com',
        image: lingoImg,
    },
    {
        title: 'n8n Agentic Healer',
        description: 'Monitoring and self-healing for n8n workflows. A Gemini-powered agent detects failing workflows and applies fixes automatically.',
        tags: ['n8n', 'AI Agent', 'Gemini', 'FastAPI'],
        github: 'https://github.com/MarshalMutisi/N8N-self-annealing',
        link: 'https://n8n-self-annealing.onrender.com',
        image: n8nergeticImg,
    },
    {
        title: 'AI Automation Workflow Suite',
        description: 'AI-powered automation workflows including customer support agents, RAG pipelines and webhook integrations built in n8n.',
        tags: ['n8n', 'AI Agents', 'RAG', 'APIs'],
        github: 'https://github.com/MarshalMutisi',
        link: null,
        image: workflowImg,
    },
    {
        title: 'Learning Path Tracker',
        description: 'LMS for developers with authentication, real-time progress tracking and analytics, reducing tracking effort by ~50%.',
        tags: ['React', 'Next.js', 'Vercel', 'Analytics'],
        github: 'https://github.com/MarshalMutisi/Learning-Path-Tracker',
        link: 'https://learning-path-tracker-39yo.vercel.app/',
        image: learningImg,
    },
    {
        title: 'Thinkboard Notes',
        description: 'Full-stack MERN notes app with CRUD, a REST API, rate-limiting middleware and a responsive UI.',
        tags: ['MongoDB', 'Express', 'React', 'Node'],
        github: 'https://github.com/MarshalMutisi/Thinkboard',
        link: 'https://thinkboard-web-lmtz.onrender.com',
        image: notesImg,
    },
    {
        title: 'Slice Hub',
        description: 'Next.js 15 pizza e-commerce platform with authentication, cart management and user profiles.',
        tags: ['Next.js 15', 'Tailwind', 'Auth', 'E-commerce'],
        github: 'https://github.com/MarshalMutisi/slice-hub',
        link: 'https://slice-hub-one.vercel.app',
        image: pizzaImg,
    },
]

export const experiences = [
    {
        company: 'Landsiedel NLP Training',
        role: 'Full Stack Developer Intern, IT Development',
        duration: 'Jan 2025 – Jun 2025',
        description: 'Landsiedel NLP Training has led in communication and personal development for over 25 years. I contributed to the digital transformation of its web platforms.',
        responsibilities: [
            'Designed and built responsive web interfaces in HTML and CSS across several projects.',
            'Created AI-assisted, SEO-optimized content for an international website.',
            'Developed dynamic web applications with PHP and MySQL.',
            'Worked with subject-matter departments to turn requirements into working features.',
        ],
        tags: ['PHP', 'MySQL', 'HTML/CSS', 'SEO', 'AI Content'],
    },
]
