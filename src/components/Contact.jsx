import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Phone, Info, ArrowUpRight, Github, Linkedin, MessageSquare } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, message } = formData
        const mailtoLink = `mailto:mohammedsalihk8547@gmail.com?subject=Portfolio Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`

        const link = document.createElement('a')
        link.href = mailtoLink
        link.click()

        setFormData({ name: '', email: '', message: '' })
        setIsSent(true)
        setTimeout(() => setIsSent(false), 5000)
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    return (
        <section id="contact" className="py-24 bg-black border-t-2 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Contact Protocol</h2>
                        <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                            Launch A <span className="text-accent">Project</span> Together.
                        </h3>

                        <div className="space-y-6">
                            {/* Info Blocks */}
                            <div className="bg-black border-2 border-white p-8 shadow-[8px_8px_0px_rgba(255,255,255,0.05)] group hover:-translate-y-1 transition-all">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">Direct Communication</h4>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white text-black flex items-center justify-center shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <a href="mailto:mohammedsalihk8547@gmail.com" className="text-lg md:text-xl font-black uppercase tracking-tight text-white hover:text-accent transition-colors">
                                        mohammedsalihk8547@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="bg-black border-2 border-white p-8 shadow-[8px_8px_0px_rgba(255,255,255,0.05)] group hover:-translate-y-1 transition-all">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">Instant Response</h4>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white text-black flex items-center justify-center shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <a href="https://wa.me/918547276865" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-black uppercase tracking-tight text-white hover:text-accent transition-colors">
                                        +91 8547276865
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border-2 border-white p-6 sm:p-8 md:p-12 shadow-[12px_12px_0px_rgba(255,255,255,0.1)] relative"
                    >
                        {/* Box Labels */}
                        <div className="absolute -top-4 -right-2 sm:-right-4 bg-white text-black px-3 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                            CONTACT FORM
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border-2 border-white/20 px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-white transition-colors text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs"
                                    placeholder="YOUR NAME"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border-2 border-white/20 px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-white transition-colors text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs"
                                    placeholder="EMAIL@EXAMPLE.COM"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Your Message</label>
                                <textarea
                                    rows="4"
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border-2 border-white/20 px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-white transition-colors text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs"
                                    placeholder="TYPE MESSAGE HERE..."
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className={`w-full py-4 md:py-5 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs transition-all flex items-center justify-center gap-4 active:translate-x-1 active:translate-y-1 active:shadow-none ${isSent ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-black hover:text-white hover:border-white shadow-[8px_8px_0px_rgba(255,255,255,0.2)]'}`}
                            >
                                {isSent ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                                {!isSent && <Send size={16} />}
                            </button>

                            {isSent && (
                                <p className="text-center text-green-500 font-black text-[10px] uppercase tracking-widest mt-4">
                                    LOG: Email client initialized successfully.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
