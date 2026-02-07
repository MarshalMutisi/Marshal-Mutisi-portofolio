import React from 'react'

const Footer = () => {
    return (
        <footer className='max-w-[1200px] mx-auto py-12 px-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='text-center md:text-left'>
                <h2 className='text-2xl font-bold text-secondary mb-2'>PORTFOLIO</h2>
                <p className='text-tertiary text-sm'>Building the future, one pixel at a time.</p>
            </div>

            <div className='flex gap-8 text-tertiary text-sm'>
                <a href="#home" className='hover:text-secondary transition-colors'>Home</a>
                <a href="#about" className='hover:text-secondary transition-colors'>About</a>
                <a href="#projects" className='hover:text-secondary transition-colors'>Projects</a>
                <a href="#contact" className='hover:text-secondary transition-colors'>Contact</a>
            </div>

            <p className='text-tertiary text-sm'>
                © {new Date().getFullYear()} Marshal Mutisi. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
