import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: "ogDoc",
            description: "Real-time collaborative document editor with sub-100ms latency, collaborative editing using Yjs CRDTs and WebSockets.",
            tech: ["React.js", "Node.js", "WebSockets", "Yjs", "WebRTC"],
            github: "https://github.com/sinanrahman/ogDoc",
            live: null,
            image: "ogdoc"
        },
        {
            title: "SKYLARK",
            description: "Luxury vehicle reservation system with real-time booking, Razorpay integration, and live admin dashboard.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
            github: "https://github.com/salih85/Skylark",
            live: "https://skylark-frontend-eqdt.onrender.com/",
            image: "skylark"
        },
        {
            title: "Member Vault",
            description: "Reusable membership platform handling plans, payments, and member access with role-based control.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Nodemailer"],
            github: "https://github.com/nadiya-km/Member-Vault",
            live: null,
            image: "membervault"
        }
    ]

    return (
        <section id="projects" className="py-24 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Featured Work</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Selected Projects</h3>
                    </div>
                    <a href="https://github.com/salih85" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                        View all on GitHub <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-600/20 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm z-20">
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8 h-full flex items-center justify-center">
                                    <span className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity uppercase tracking-tighter">
                                        {project.title}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-accent px-2 py-0.5 bg-accent/10 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
