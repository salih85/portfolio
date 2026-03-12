import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Server, Database, Globe, Code } from 'lucide-react'

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            icon: <Layout size={24} />,
            skills: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "EJS"]
        },
        {
            title: "Backend Services",
            icon: <Server size={24} />,
            skills: ["Node.js", "Express.js", "JWT", "WebSocket", "REST APIs"]
        },
        {
            title: "Data Architecture",
            icon: <Database size={24} />,
            skills: ["MongoDB", "Mongoose", "Caching", "Persistence"]
        },
        {
            title: "Tools & Protocols",
            icon: <Globe size={24} />,
            skills: ["Git", "GitHub", "Yjs", "WebRTC", "Google OAuth"]
        }
    ]

    return (
        <section id="skills" className="py-24 bg-black border-t-2 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-4">Technical Stack</h2>
                        <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            Technical <span className="text-accent underline decoration-4 underline-offset-8">Core</span>
                        </h3>
                    </div>
                    <div className="hidden md:flex border border-white/20 px-6 py-3 flex-col items-end gap-1">
                        <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">Efficiency Status</span>
                        <span className="text-xs font-black text-green-500 uppercase tracking-widest flex items-center gap-2">
                             Full Op Capability <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-black border-2 border-white p-8 hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 text-white shadow-[8px_8px_0px_rgba(255,255,255,0.05)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)]"
                        >
                            <div className="w-14 h-14 bg-black border-2 border-white flex items-center justify-center mb-10 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black transition-colors">
                                {category.icon}
                            </div>
                            
                            <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-white/10 pb-4">
                                {category.title}
                            </h4>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 border border-white/20 font-black text-[10px] uppercase tracking-widest bg-white/5 hover:bg-white hover:text-black transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contribution Detail / Verification */}
                <div className="mt-20 border-2 border-white p-8 bg-black flex flex-col md:flex-row items-center gap-8 shadow-[12px_12px_0px_rgba(255,255,255,0.05)]">
                    <div className="w-16 h-16 bg-white shrink-0 flex items-center justify-center text-black">
                        <Code size={32} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h5 className="font-black uppercase text-xs tracking-[0.3em] mb-2 text-white/40">Core Methodology</h5>
                        <p className="text-gray-400 font-bold leading-relaxed max-w-3xl italic">
                            Building production-grade systems with a focus on atomic architecture, secure middleware implementation, and low-latency real-time synchronization.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
