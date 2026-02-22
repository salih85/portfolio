import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            Passionate about creating <span className="text-accent">impactful</span> digital solutions.
                        </h3>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I am a Full-stack developer with experience building secure and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) and Vue.js.
                            </p>
                            <p>
                                I specialize in building robust backend services, integrating secure payment gateways like Razorpay, and developing dynamic, responsive user interfaces.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-2xl border border-white/10 flex items-center justify-center p-8">
                            <div className="text-center">
                                <div className="text-6xl font-black text-white mb-2">BCA</div>
                                <p className="text-gray-400 uppercase tracking-widest font-bold">Graduate 2025</p>
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <div className="text-2xl font-bold text-accent">Intern</div>
                                        <p className="text-xs text-gray-500 uppercase">Fugipie Tech</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <div className="text-2xl font-bold text-accent">MERN</div>
                                        <p className="text-xs text-gray-500 uppercase">Specialization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-3xl" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600/30 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
