import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import ProjectModal from './ProjectModal'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            title: "ogDoc",
            description: "Real-time collaborative document editor with sub-100ms latency, collaborative editing using Yjs CRDTs and WebSockets.",
            longDescription: "ogDoc is a sophisticated collaborative workspace that enables multiple users to edit documents simultaneously in real-time. Built with a focus on performance and reliability, it leverages CRDT technologies for conflict-free synchronization.",
            fullDetail: "The system implements advanced WebSockets for communication and Yjs for data consistency, ensuring that every character ripple is synchronized across all connected clients with minimal delay.",
            tech: ["React.js", "Node.js", "WebSockets", "Yjs", "WebRTC", "Tailwind CSS"],
            github: "https://github.com/sinanrahman/ogDoc",
            live: null,
            image: "ogdoc",
            team: [
                { name: "Sinan Rahman", role: "Team Lead / Architect", initials: "SR" },
                { name: "Salih", role: "Full Stack Developer", initials: "S" }
            ]
        },
        {
            title: "SKYLARK",
            description: "Luxury vehicle reservation system with real-time booking, Razorpay integration, and live admin dashboard.",
            longDescription: "Skylark is a premium car rental platform designed to provide a seamless high-end experience for automobile enthusiasts. It features a robust reservation engine and an intuitive management interface for administrators.",
            fullDetail: "From secure payment processing with Razorpay to real-time availability tracking, Skylark combines elegant frontend design with a powerful Node.js backend to handle complex booking logic and inventory management.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary"],
            github: "https://github.com/salih85/Skylark",
            live: "https://skylark-frontend-eqdt.onrender.com/",
            image: "skylark"
        },
        {
            title: "Member Vault",
            description: "Reusable membership platform handling plans, payments, and member access with role-based control.",
            longDescription: "Member Vault provides a plug-and-play solution for businesses looking to implement subscription models. It simplifies the complexity of recurring payments and gated content access.",
            fullDetail: "The platform includes a comprehensive admin suite for managing member tiers, tracking revenue, and configuring automated email notifications via Nodemailer, all while maintaining strict security standards.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Nodemailer", "JWT"],
            github: "https://github.com/nadiya-km/Member-Vault",
            live: null,
            image: "membervault",
            team: [
                { name: "Nadiya K M", role: "Project Manager", initials: "NK" },
                { name: "Salih", role: "Backend Lead", initials: "S" }
            ]
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
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-600/20 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm z-20">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm transform transition-transform group-hover:scale-110">
                                            View Details
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 h-full flex items-center justify-center">
                                    <span className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity uppercase tracking-tighter">
                                        {project.title}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 text-left">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-accent px-2 py-0.5 bg-accent/10 rounded">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 px-2 py-0.5">+{project.tech.length - 3} More</span>
                                    )}
                                </div>
                                <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    )
}

export default Projects
