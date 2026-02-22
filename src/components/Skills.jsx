import React from 'react'
import { motion } from 'framer-motion'
import {
    SiReact, SiTailwindcss, SiJavascript, SiNodedotjs,
    SiMongodb, SiNextdotjs, SiTypescript, SiPython, SiDocker,
    SiExpress, SiPostgresql, SiMysql, SiSpringboot
} from 'react-icons/si'

const SkillIcon = ({ icon: Icon, name }) => (
    <motion.div
        whileHover={{ scale: 1.1, color: '#64ffda' }}
        className='flex flex-col items-center gap-2 p-6 glass rounded-xl transition-all duration-300'
    >
        <Icon className='text-5xl' />
        <span className='text-sm font-medium text-tertiary'>{name}</span>
    </motion.div>
)

const Skills = () => {
    const skills = [
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiTypescript, name: 'TypeScript' },
        { icon: SiPython, name: 'Python' },
        { icon: SiReact, name: 'React' },
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiNodedotjs, name: 'Node.js' },
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiPostgresql, name: 'PostgreSQL' },
        { icon: SiMysql, name: 'MySQL' },
        { icon: SiDocker, name: 'Docker' },
        { icon: SiSpringboot, name: 'Spring Boot' },
        { icon: SiTailwindcss, name: 'Tailwind' },
    ]

    return (
        <div className='max-w-[1200px] mx-auto py-12 sm:py-24 px-4' id='about'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='text-center mb-16'
            >
                <h2 className='text-4xl font-bold mb-4'>Technical <span className='text-secondary'>Skills</span></h2>
                <p className='text-tertiary max-w-[700px] mx-auto text-lg'>
                    I specialize in modern web technologies and AI automation, maintaining a versatile toolset to build performant and scalable solutions.
                </p>
            </motion.div>

            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6'>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SkillIcon {...skill} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
