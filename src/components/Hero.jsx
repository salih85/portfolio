import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Phone } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase mb-6">
                        Available for new opportunities
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                        Mohammed <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Salih.k</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4">
                        MERN Stack Developer building secure, scalable, and visually stunning web experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6 mb-12"
                >
                    <a href="#projects" className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white hover:border-white transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.2)] flex items-center gap-3 active:translate-x-1 active:translate-y-1 active:shadow-none">
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="px-10 py-5 bg-black border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center gap-8 text-gray-400"
                >
                    <a href="https://github.com/salih85" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-salih-k/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://wa.me/918547276865" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Phone size={24} />
                    </a>
                    <a href="mailto:mohammedsalihk8547@gmail.com" className="hover:text-accent transition-colors">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    )
}

export default Hero
