import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectModal from './ProjectModal'
import { projectsData } from './AllProjects'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const featuredProjects = projectsData.slice(0, 3)

    return (
        <section id="projects" className="py-24 bg-black border-t-2 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Featured Work</h2>
                        <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">My Projects</h3>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredProjects.map((project, idx) => (
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
                
                <div className="mt-16 flex justify-center">
                    <Link to="/projects" className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 font-black uppercase tracking-widest border-2 border-white hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.2)] hover:shadow-none translate-y-[-2px] hover:translate-y-[2px] translate-x-[-2px] hover:translate-x-[2px]">
                        Explore All Projects <ArrowRight size={20} />
                    </Link>
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
