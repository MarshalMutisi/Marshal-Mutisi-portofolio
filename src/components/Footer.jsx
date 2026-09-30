import React from 'react'
import { ArrowUp } from 'lucide-react'
import { profile } from '../data'
import { SocialLinks } from './ui'
import { scrollToId } from '../lib/lenis'

const Footer = () => (
    <footer className='border-t border-line'>
        <div className='mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between'>
            <div>
                <div className='flex items-center gap-2.5'>
                    <span className='grid size-8 place-items-center rounded-lg bg-accent font-mono text-sm font-semibold text-white'>
                        MM
                    </span>
                    <span className='font-medium text-fg'>{profile.name}</span>
                </div>
                <p className='mt-3 text-sm text-subtle'>
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
            </div>

            <div className='flex items-center gap-2'>
                <SocialLinks />
                <button
                    onClick={() => scrollToId('home')}
                    aria-label='Back to top'
                    className='grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:bg-white/5 hover:text-fg'
                >
                    <ArrowUp size={18} />
                </button>
            </div>
        </div>
    </footer>
)

export default Footer
