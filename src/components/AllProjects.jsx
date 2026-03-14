import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Folder, Layout, ShieldCheck, Mail, Briefcase, GraduationCap, Gamepad2 } from 'lucide-react'
import ProjectModal from './ProjectModal'

export const projectsData = [
       {
        title: "ogDoc",
        description: "Real-time collaborative document editor with sub-100ms latency.",
        longDescription: "ogDoc is a sophisticated collaborative workspace that enables multiple users to edit documents simultaneously in real-time.",
        fullDetail: "Built with a focus on performance and reliability, it leverages CRDT technologies for conflict-free synchronization.",
        tech: ["React.js", "Node.js", "WebSockets", "Yjs", "WebRTC", "Tailwind CSS"],
        github: "https://github.com/sinanrahman/ogDoc",
        live: null,
        icon: <Layout size={24} />
    },
    {
        title: "SKYLARK",
        description: "Luxury vehicle reservation system with real-time booking and Razorpay.",
        longDescription: "Skylark is a premium car rental platform designed to provide a seamless high-end experience for automobile enthusiasts.",
        fullDetail: "Features a robust reservation engine and an intuitive management interface for administrators.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
        github: "https://github.com/salih85/Skylark",
        live: "https://skylark-frontend-eqdt.onrender.com/",
        icon: <Folder size={24} />
    },
    {
        title: "Member Vault",
        description: "Reusable membership platform with subscription handling and access control.",
        longDescription: "Member Vault provides a plug-and-play solution for businesses looking to implement subscription models.",
        fullDetail: "The platform includes a comprehensive admin suite for managing member tiers, tracking revenue, and configuring automated email notifications via Nodemailer.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Nodemailer", "JWT"],
        github: "https://github.com/nadiya-km/Member-Vault",
        live: null,
        icon: <ShieldCheck size={24} />
    },
    {
        title: "TUTORA",
        description: "Educational management platform for tutoring workflows.",
        longDescription: "Tutora is a client-commissioned educational management platform designed to manage the complete workflow of a tutoring organization. The system supports student session management, teacher coordination, salary processing, fee tracking, reporting, and parent monitoring through a centralized dashboard.",
        fullDetail: "The project was developed in a collaborative production-level environment, ensuring structured communication, coordinated development, and code quality within a shared codebase.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        github: null,
        live: null,
        icon: <GraduationCap size={24} />
    },
    {
        title: "Job Portal & Resume Analyzer",
        description: "Recruitment platform with automated resume screening.",
        longDescription: "AI Job Portal & Resume Analyzer is a full-stack recruitment platform that streamlines hiring using automated resume screening and role-based workflows.",
        fullDetail: "Recruiters can post jobs, analyze resumes with skill detection, and manage applicants through a structured hiring pipeline. Job seekers can create profiles, apply for jobs, and track application status.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "AI Integrated"],
        github: "https://github.com/salih85/job-portal-resume-analyzer",
        live: "https://job-portal-resume-analyzer.vercel.app/",
        icon: <Briefcase size={24} />
    },
    {
        title: "Duo Pro Football",
        description: "Real-time multiplayer web game with server-authoritative physics.",
        longDescription: "Duo Pro Football is a real-time multiplayer web game where players compete in two-player online matches or against a computer opponent.",
        fullDetail: "The system uses a server-authoritative architecture to manage ball physics, collision detection, and score validation for fair and synchronized gameplay. Real-time communication is powered by WebSockets.",
        tech: ["JavaScript", "HTML5 Canvas", "Node.js", "WebSockets"],
        github: "https://github.com/salih85/DuoProFootball.git",
        live: "https://duoprofootball.onrender.com/",
        icon: <Gamepad2 size={24} />
    },

]

const AllProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section className="py-24 bg-black min-h-screen pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Complete Archive</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">All Projects</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-black border-2 border-white p-8 hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 cursor-pointer text-white shadow-[8px_8px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.3)] flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-black border-2 border-white flex items-center justify-center mb-8 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                                {project.icon}
                            </div>
                            
                            <div className="space-y-4 flex-1">
                               <h4 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:underline group-hover:text-accent">
                                 {project.title}
                               </h4>
                               <p className="text-gray-400 font-bold text-sm tracking-tight leading-relaxed">
                                 {project.description}
                               </p>
                            </div>

                            <div className="mt-8 pt-8 border-t-2 border-white/20 flex items-center justify-between shrink-0">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">View Case Study</span>
                                <div className="w-8 h-8 border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
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

export default AllProjects
