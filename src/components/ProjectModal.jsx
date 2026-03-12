import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Briefcase, Info, ArrowLeft, Code, Users } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-12 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="relative w-full max-w-5xl h-full md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto bg-black border-t-4 md:border-4 border-white shadow-[8px_8px_0px_rgba(255,255,255,0.2)] text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation/Close */}
          <div className="sticky top-0 z-30 bg-black/95 backdrop-blur-sm border-b-2 border-white flex justify-between items-center px-6 py-4">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-accent transition-colors"
            >
              <ArrowLeft size={16} /> Back to Projects
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-[2px_2px_0px_rgba(255,255,255,0.2)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <X size={20} />
            </button>
          </div>

          {/* Project Header */}
          <header className="px-6 py-12 md:px-12 md:py-16 border-b-2 border-white bg-white/5">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-black border-2 border-white flex items-center justify-center text-white shadow-[6px_6px_0px_rgba(255,255,255,0.2)] flex-shrink-0">
                <Briefcase size={40} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-none">{project.title}</h2>
                <div className="inline-block bg-white text-black px-4 py-1.5 text-sm font-black uppercase tracking-widest">
                  Client Project · {project.tech[0]}
                </div>
              </div>
            </div>
          </header>

          <main className="px-6 py-12 md:px-12 md:py-16">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Confidential/Banner */}
              <div className="border-2 border-white p-6 md:p-8 bg-white text-black shadow-[6px_6px_0px_rgba(255,255,255,0.1)] flex items-start gap-6">
                 <div className="w-12 h-12 bg-black text-white border-2 border-white flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                   <Info size={24} />
                 </div>
                 <div>
                   <h3 className="font-black uppercase text-sm tracking-widest mb-1">Developer Contribution — Verified</h3>
                   <p className="text-gray-900 text-sm font-bold leading-relaxed">
                     Built as a robust, production-ready solution. Technical architecture and proprietary logic are protected under client confidentiality.
                   </p>
                 </div>
              </div>

              {/* About Section */}
              <section>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 border-b-4 border-white inline-block pb-1 font-mono">About the Project</h3>
                <div className="space-y-6 text-lg font-medium text-gray-400 leading-relaxed italic border-l-4 border-white/20 pl-8">
                  <p>{project.longDescription || project.description}</p>
                  {project.fullDetail && <p>{project.fullDetail}</p>}
                </div>
              </section>

              <hr className="border-t-2 border-dashed border-white/10" />

              {/* Grid Content */}
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Team Section */}
                <section>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-8 border-b-4 border-white inline-block pb-1">The Team</h3>
                  <div className="space-y-4">
                    {(project.team || [{name: "Salih", role: "Full Stack Developer", initials: "S"}]).map((member) => (
                      <div key={member.name} className="border-2 border-white bg-white/5 p-5 flex items-center gap-4 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                        <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-black text-xs">
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-black uppercase text-sm">{member.name}</p>
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tech Stack */}
                <section>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-8 border-b-4 border-white inline-block pb-1">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="border-2 border-white px-4 py-2 bg-black font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_rgba(255,255,255,0.1)] hover:bg-white hover:text-black transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-12 bg-white text-black p-6 border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
                     <div className="flex items-center gap-3 mb-4">
                        <Code size={16} />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">Main Contributions</span>
                     </div>
                     <ul className="text-xs font-bold space-y-2 list-none p-0">
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-black rounded-full"></span>
                           Secure Authentication & RBAC
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-black rounded-full"></span>
                           Database Architecture & Optimization
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-black rounded-full"></span>
                           Real-time Features & Integrations
                        </li>
                     </ul>
                  </div>
                </section>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-12">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black py-5 px-8 flex items-center justify-center gap-3 font-black uppercase tracking-widest hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_0px_rgba(255,255,255,0.3)]"
                >
                  <Github size={20} /> View Case Study
                </a>
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-black border-2 border-white text-white py-5 px-8 flex items-center justify-center gap-3 font-black uppercase tracking-widest hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.1)]"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </main>

          {/* Footer Note */}
          <footer className="px-6 py-12 md:px-12 border-t-2 border-white bg-white/5 flex justify-between items-center">
            <p className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">&copy; 2026 Portfolio of Salih</p>
            <div className="flex gap-4">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
