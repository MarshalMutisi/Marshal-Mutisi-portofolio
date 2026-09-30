import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { Mail, Phone, Copy, Check, ArrowRight, Loader2 } from 'lucide-react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { Section, SectionHeading, Reveal } from './ui'
import { profile } from '../data'

const inputClass =
    'w-full rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent focus:bg-white/[0.04] focus:outline-none'

const Field = ({ label, children }) => (
    <label className='block'>
        <span className='mb-1.5 block text-xs font-medium text-muted'>{label}</span>
        {children}
    </label>
)

const Contact = () => {
    const form = useRef()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email)
            setCopied(true)
            toast.success('Email copied to clipboard')
            setTimeout(() => setCopied(false), 2000)
        } catch {
            window.location.href = `mailto:${profile.email}`
        }
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        emailjs
            .sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Message sent. I'll get back to you soon.")
                    form.current.reset()
                },
                () => {
                    toast.error('Message failed to send. Please email me directly.')
                }
            )
            .finally(() => setIsSubmitting(false))
    }

    const channels = [
        { icon: SiLinkedin, label: 'LinkedIn', value: 'marshal-mutisi', href: profile.linkedin },
        { icon: SiGithub, label: 'GitHub', value: 'MarshalMutisi', href: profile.github },
        { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    ]

    return (
        <Section id='contact'>
            <SectionHeading
                eyebrow='05 · Contact'
                title="Let's build something together."
                description="I'm open to roles, freelance work and collaborations in AI automation and full-stack development. I usually reply within a day."
            />

            <div className='grid gap-6 lg:grid-cols-[1fr_1.2fr]'>
                <Reveal className='space-y-4'>
                    <div className='rounded-2xl border border-line bg-surface p-6'>
                        <p className='font-mono text-[11px] uppercase tracking-wider text-subtle'>Email</p>
                        <div className='mt-2 flex items-center justify-between gap-3'>
                            <a
                                href={`mailto:${profile.email}`}
                                className='truncate text-lg font-medium text-fg transition-colors hover:text-accent-soft sm:text-xl'
                            >
                                {profile.email}
                            </a>
                            <button
                                onClick={copyEmail}
                                aria-label='Copy email address'
                                className='grid size-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:bg-white/5 hover:text-fg'
                            >
                                {copied ? <Check size={16} className='text-emerald-400' /> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>

                    <ul className='divide-y divide-line rounded-2xl border border-line bg-surface'>
                        {channels.map(({ icon: Icon, label, value, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel='noreferrer'
                                    className='group flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.02]'
                                >
                                    <span className='grid size-9 place-items-center rounded-lg bg-accent/10 text-accent-soft'>
                                        <Icon size={16} />
                                    </span>
                                    <div className='min-w-0 flex-1'>
                                        <p className='font-mono text-[11px] uppercase tracking-wider text-subtle'>{label}</p>
                                        <p className='truncate text-sm text-fg'>{value}</p>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className='text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-fg'
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={0.08}>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='space-y-4 rounded-2xl border border-line bg-surface p-6 sm:p-8'
                    >
                        <div className='grid gap-4 sm:grid-cols-2'>
                            <Field label='Name'>
                                <input type='text' name='from_name' placeholder='Jane Doe' required className={inputClass} />
                            </Field>
                            <Field label='Email'>
                                <input type='email' name='from_email' placeholder='jane@company.com' required className={inputClass} />
                            </Field>
                        </div>
                        <Field label='Subject'>
                            <input type='text' name='subject' placeholder='Project, role or idea' required className={inputClass} />
                        </Field>
                        <Field label='Message'>
                            <textarea
                                name='message'
                                rows='5'
                                placeholder='Tell me a bit about what you have in mind…'
                                required
                                className={`${inputClass} resize-none`}
                            />
                        </Field>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60'
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className='animate-spin' /> Sending…
                                </>
                            ) : (
                                <>
                                    Send message <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>
                </Reveal>
            </div>
        </Section>
    )
}

export default Contact
