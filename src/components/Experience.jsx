import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, Info, ArrowUpRight } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            company: "Fugipie Technologies",
            role: "Software Development Intern",
            period: "December 2025 – March 2026",
            description: "Core member of the backend development team, focused on building secure and high-performance web applications using the MERN stack.",
            points: [
                "Developed secure authentication using JWT and bcryptjs.",
                "Designed and optimized MongoDB schemas using Mongoose.",
                "Built scalable backend services with Node.js and Express.js Following MVC.",
                "Integrated Razorpay and Cashfree for secure payment processing.",
                "Improved SEO and performance using server-side rendering with EJS."
            ]
        }
    ]

    return (
        <section id="experience" className="py-24 bg-black border-t-2 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-4">Professional Trajectory</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                        Work <span className="text-accent underline decoration-4 underline-offset-8">History</span>
                    </h3>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black border-2 border-white p-8 md:p-12 shadow-[12px_12px_0px_rgba(255,255,255,0.05)] relative overflow-hidden group"
                        >
                            {/* Decorative Top Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-white/10 transition-colors" />

                            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                                {/* Left Side: Role & Company */}
                                <div className="lg:w-1/3">
                                    <div className="inline-block bg-white text-black px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                                        Active Engagement
                                    </div>
                                    <h4 className="text-3xl font-black uppercase tracking-tight text-white mb-2 leading-none">{exp.role}</h4>
                                    <p className="text-accent text-xl font-bold uppercase tracking-tight mb-8 mb-6">{exp.company}</p>
                                    
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border border-white/10 w-fit px-4 py-2 bg-white/5">
                                        <Calendar size={14} /> {exp.period}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="lg:w-2/3 border-l-2 border-white/10 lg:pl-12">
                                    <h5 className="font-black uppercase text-xs tracking-widest text-white/40 mb-6 flex items-center gap-3">
                                        <Info size={14} /> Project Brief & Contributions
                                    </h5>
                                    
                                    <p className="text-lg font-medium text-gray-300 italic mb-8 leading-relaxed border-b border-white/10 pb-8">
                                        "{exp.description}"
                                    </p>

                                    <ul className="space-y-4">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex gap-4 text-gray-400 font-bold leading-relaxed text-sm">
                                                <div className="w-5 h-5 bg-white text-black flex items-center justify-center shrink-0 font-black text-[10px]">
                                                    {i + 1}
                                                </div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Verification Footer */}
                            <div className="mt-12 pt-8 border-t-2 border-dashed border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/60">
                                    <Briefcase size={14} /> Verification: Proof of internship available on request
                                </div>
                                <div className="flex gap-3">
                                     <span className="w-2 h-2 bg-white/20 rounded-full"></span>
                                     <span className="w-2 h-2 bg-white/20 rounded-full"></span>
                                     <span className="w-2 h-2 bg-white rounded-full"></span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
