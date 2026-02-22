import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Phone, MapPin } from 'lucide-react'

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

        // More robust way to trigger mailto
        const link = document.createElement('a')
        link.href = mailtoLink
        link.click()

        // Clear form after submission
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
        <section id="contact" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Get in touch</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's build something <span className="text-accent">amazing</span> together.</h3>

                        <div className="space-y-8 mt-12">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                    <Mail className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email</p>
                                    <a href="mailto:mohammedsalihk8547@gmail.com" className="text-lg font-medium hover:text-accent transition-colors text-white">mohammedsalihk8547@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                    <Phone className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp / Phone</p>
                                    <a href="https://wa.me/918547276865" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-accent transition-colors text-white">+91 8547276865</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    rows="4"
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white"
                                    placeholder="What's on your mind?"
                                />
                            </div>
                            <button type="submit" className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group ${isSent ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-accent hover:text-white'}`}>
                                {isSent ? 'Message Initialized!' : 'Send Message'}
                                {!isSent && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                            {isSent && (
                                <p className="text-center text-green-500 text-sm mt-2">
                                    Your email client should open now. If not, please click the email address on the left.
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
