import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Folder, Layout, ShieldCheck, Mail } from 'lucide-react'
import ProjectModal from './ProjectModal'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            title: "ogDoc",
            description: "Real-time collaborative document editor with sub-100ms latency.",
            longDescription: "ogDoc is a sophisticated collaborative workspace that enables multiple users to edit documents simultaneously in real-time. Built with a focus on performance and reliability, it leverages CRDT technologies for conflict-free synchronization.",
            fullDetail: "The system implements advanced WebSockets for communication and Yjs for data consistency, ensuring that every character ripple is synchronized across all connected clients with minimal delay.",
            tech: ["React.js", "Node.js", "WebSockets", "Yjs", "WebRTC", "Tailwind CSS"],
            github: "https://github.com/sinanrahman/ogDoc",
            live: null,
            icon: <Layout size={24} />,
            team: [
                { name: "Sinan Rahman", role: "Team Lead / Architect", initials: "SR" },
                { name: "Salih", role: "Full Stack Developer", initials: "S" }
            ]
        },
        {
            title: "SKYLARK",
            description: "Luxury vehicle reservation system with real-time booking and Razorpay.",
            longDescription: "Skylark is a premium car rental platform designed to provide a seamless high-end experience for automobile enthusiasts. It features a robust reservation engine and an intuitive management interface for administrators.",
            fullDetail: "From secure payment processing with Razorpay to real-time availability tracking, Skylark combines elegant frontend design with a powerful Node.js backend to handle complex booking logic and inventory management.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary"],
            github: "https://github.com/salih85/Skylark",
            live: "https://skylark-frontend-eqdt.onrender.com/",
            icon: <Folder size={24} />
        },
        {
            title: "Member Vault",
            description: "Reusable membership platform with subscription handling and access control.",
            longDescription: "Member Vault provides a plug-and-play solution for businesses looking to implement subscription models. It simplifies the complexity of recurring payments and gated content access.",
            fullDetail: "The platform includes a comprehensive admin suite for managing member tiers, tracking revenue, and configuring automated email notifications via Nodemailer, all while maintaining strict security standards.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Nodemailer", "JWT"],
            github: "https://github.com/nadiya-km/Member-Vault",
            live: null,
            icon: <ShieldCheck size={24} />,
            team: [
                { name: "Nadiya K M", role: "Project Manager", initials: "NK" },
                { name: "Salih", role: "Backend Lead", initials: "S" }
            ]
        }
    ]

    return (
        <section id="projects" className="py-24 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Portfolio Archive</h2>
                        <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">Project Contributions</h3>
                    </div>
                    <a href="https://github.com/salih85" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-black uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] transition-all">
                        GitHub <ArrowUpRight size={20} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white border-2 border-black p-8 hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 cursor-pointer text-black"
                            style={{ boxShadow: '8px 8px 0px rgba(255, 255, 255, 0.1), 8px 8px 0px rgba(0, 0, 0, 1)' }}
                        >
                            <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white transition-colors">
                                {project.icon}
                            </div>
                            
                            <div className="space-y-4">
                               <h4 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:underline">
                                 {project.title}
                               </h4>
                               <p className="text-gray-600 font-bold text-sm tracking-tight leading-relaxed line-clamp-2">
                                 {project.description}
                               </p>
                            </div>

                            <div className="mt-8 pt-8 border-t-2 border-black flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Case Study</span>
                                <div className="w-8 h-8 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                    <ArrowUpRight size={16} />
                                </div>
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
