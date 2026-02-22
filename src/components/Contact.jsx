import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                alert('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className='max-w-[1200px] mx-auto py-12 sm:py-24 px-4' id='contact'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='text-center mb-16'
            >
                <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Get In <span className='text-secondary'>Touch</span></h2>
                <p className='text-tertiary max-w-[600px] mx-auto'>
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
            </motion.div>

            <div className='flex flex-col md:flex-row gap-12 justify-center items-start'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='flex-1 glass p-6 sm:p-8 rounded-2xl w-full'
                >
                    <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
                    <div className='space-y-6'>
                        <div className='flex items-center gap-4 group'>
                            <div className='p-4 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-primary transition-all'>
                                <AiOutlineMail size={24} />
                            </div>
                            <div>
                                <p className='text-sm text-tertiary uppercase tracking-wider'>Email</p>
                                <p className='text-lg font-medium break-all'>mutisimarshal@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 group'>
                            <div className='p-4 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-primary transition-all'>
                                <AiOutlinePhone size={24} />
                            </div>
                            <div>
                                <p className='text-sm text-tertiary uppercase tracking-wider'>Phone</p>
                                <p className='text-lg font-medium'>+263 789 773 927</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 group'>
                            <div className='p-4 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-primary transition-all'>
                                <AiOutlineLinkedin size={24} />
                            </div>
                            <div>
                                <p className='text-sm text-tertiary uppercase tracking-wider'>LinkedIn</p>
                                <a
                                    href="https://linkedin.com/in/marshal-mutisi-34a07a298"
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-lg font-medium hover:text-secondary transition-colors'
                                >
                                    marshal-mutisi
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='flex-1 w-full'
                >
                    <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <input type="text" name="from_name" placeholder='Your Name' required className='flex-1 bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-secondary transition-all' />
                            <input type="email" name="from_email" placeholder='Your Email' required className='flex-1 bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-secondary transition-all' />
                        </div>
                        <input type="text" name="subject" placeholder='Subject' required className='w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-secondary transition-all' />
                        <textarea name="message" placeholder='Message' rows="5" required className='w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-secondary transition-all resize-none'></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='w-full py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-[#4ade80] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
