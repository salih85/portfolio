import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Briefcase, Users, Code, Info } from 'lucide-react'

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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-10"
          >
            <X size={24} />
          </button>

          {/* Modal Branding/Header */}
          <div className="relative h-64 bg-gradient-to-br from-accent/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-30">
               {/* Pattern overlay */}
               <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            </div>
            <span className="text-6xl md:text-8xl font-black opacity-10 uppercase tracking-tighter">
              {project.title}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0a0a0a] to-transparent">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-accent/20 rounded-lg">
                    <Briefcase size={20} className="text-accent" />
                 </div>
                 <span className="text-sm font-bold tracking-widest uppercase text-accent/80">Project Overview</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-12">
                {/* About Section */}
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <Info size={20} className="text-accent" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">About the Project</h3>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {project.longDescription || project.description}
                    </p>
                    {project.fullDetail && (
                      <p className="text-gray-400 leading-relaxed mt-4">
                        {project.fullDetail}
                      </p>
                    )}
                  </div>
                </section>

                {/* Status/Banner inspired by Shamil */}
                <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Briefcase size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Developer Contribution</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Built as a full-stack solution featuring advanced real-time capabilities and optimized backend architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-10">
                {/* Tech Stack */}
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <Code size={18} className="text-accent" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Team Section (Optional) */}
                {project.team && (
                    <section>
                      <div className="flex items-center gap-2 mb-6">
                        <Users size={18} className="text-accent" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">The Team</h3>
                      </div>
                      <div className="space-y-3">
                         {project.team.map((member) => (
                           <div key={member.name} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                                {member.initials}
                              </div>
                              <div>
                                <div className="text-xs font-bold">{member.name}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-tighter">{member.role}</div>
                              </div>
                           </div>
                         ))}
                      </div>
                    </section>
                )}

                {/* Actions */}
                <section className="pt-6 border-t border-white/10 space-y-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Github size={20} />
                    View Case Study
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </section>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-8 border-t border-white/5 bg-white/[0.02] text-center">
             <p className="text-xs text-gray-600 font-mono tracking-widest uppercase">
                &copy; 2024 Project Details - Handcrafted by Salih
             </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
