import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            company: 'Landsiedel NLP Training',
            role: 'IT Development Department (Full Stack Intern)',
            duration: 'January 2025 – June 2025',
            description: 'Landsiedel NLP Training has been a leader in communication and personal development for over 25 years. Contributed to the digital transformation and development of web-based platforms.',
            responsibilities: [
                'Design and implementation of responsive web interfaces using HTML and CSS for a range of projects.',
                'Creation of SEO-optimized content with the support of AI for an international website.',
                'Development of dynamic web applications using PHP and MySQL.',
                'Collaborative work with subject-matter departments to translate technical requirements into functional solutions.'
            ]
        }
    ]

    return (
        <div className='max-w-[1200px] mx-auto py-24 px-4' id='experience'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='mb-16'
            >
                <h2 className='text-4xl font-bold mb-4'>Professional <span className='text-secondary'>Experience</span></h2>
                <div className='w-20 h-1 bg-secondary rounded-full'></div>
            </motion.div>

            <div className='space-y-12'>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className='glass p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all duration-300'
                    >
                        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6'>
                            <div className='flex items-center gap-4'>
                                <div className='p-3 bg-secondary/10 text-secondary rounded-xl'>
                                    <Briefcase size={28} />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-quaternary'>{exp.role}</h3>
                                    <p className='text-secondary font-medium'>{exp.company}</p>
                                </div>
                            </div>
                            <span className='px-4 py-1 bg-white/5 rounded-full text-tertiary text-sm font-mono border border-white/10'>
                                {exp.duration}
                            </span>
                        </div>

                        <p className='text-tertiary mb-6 leading-relaxed'>
                            {exp.description}
                        </p>

                        <ul className='space-y-3'>
                            {exp.responsibilities.map((req, i) => (
                                <li key={i} className='flex items-start gap-3 text-tertiary'>
                                    <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0'></span>
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
