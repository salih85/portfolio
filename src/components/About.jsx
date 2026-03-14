import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Briefcase, Info } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-24 bg-black border-t-2 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">
                    
                    {/* Left Side: Photo/Graphic Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/3 flex"
                    >
                        <div className="w-full aspect-[4/5] bg-black border-2 border-white shadow-[12px_12px_0px_rgba(255,255,255,0.1)] flex items-center justify-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <User size={120} strokeWidth={1} className="text-white/20 group-hover:text-white/40 transition-colors" />
                            
                            {/* Decorative Label */}
                            <div className="absolute top-6 left-6 bg-white text-black px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                                FullStack Dev
                            </div>
                            
                            {/* Bottom Label */}
                            <div className="absolute bottom-6 right-6 border border-white/20 px-4 py-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                                Established 2025
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-2/3 flex flex-col justify-center"
                    >
                        <div className="bg-black border-2 border-white p-6 sm:p-8 md:p-12 shadow-[12px_12px_0px_rgba(255,255,255,0.05)] relative">
                            {/* Header Section */}
                            <header className="mb-8 md:mb-10 border-b-2 border-white/10 pb-6 md:pb-8">
                                <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-accent mb-4">Discovery Phase</h2>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                                    Crafting Digital <span className="text-accent underline decoration-4 underline-offset-8">Excellence</span>
                                </h3>
                                <p className="text-sm md:text-lg font-medium text-gray-400 leading-relaxed italic border-l-4 border-white pl-4 md:pl-6">
                                    "I specialize in building robust backend services, integrating secure payment gateways, and developing dynamic user interfaces."
                                </p>
                            </header>

                            {/* Detail Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Code size={18} className="text-white" />
                                        <span className="font-black uppercase text-xs tracking-widest text-white">Technical Core</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-400 leading-relaxed">
                                        Expertise in MERN stack (MongoDB, Express, React, Node.js) and Vue.js. Focused on performance, security, and scalability.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Briefcase size={18} className="text-white" />
                                        <span className="font-black uppercase text-xs tracking-widest text-white">Execution</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-400 leading-relaxed">
                                        Proven experience in integrating Razorpay, Cashfree, and managing complex database architectures with Mongoose.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About
