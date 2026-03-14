import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Computer Application (BCA)",
            institution: "Safi Institute of Advanced Study",
            period: "Graduation: March 2025",
            
            icon: <GraduationCap size={24} />
        },
        {
            degree: "Full Stack Web Development",
            institution: "DataTribe",
            period: "6-Month Intensive Program",
            details: "Specialized in MERN stack, RESTful API design, and database management.",
            icon: <BookOpen size={24} />
        }
    ]

    return (
        <section id="education" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Academic Background</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Education & Certifications</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-black border-2 border-white p-8 hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-[8px_8px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.3)]"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-black border-2 border-white flex items-center justify-center text-white shadow-[4px_4px_0px_rgba(255,255,255,0.1)] flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                                    {edu.icon}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-accent transition-colors">{edu.degree}</h4>
                                    <p className="text-gray-400 font-bold mb-1">{edu.institution}</p>
                                    <div className="inline-block bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                        {edu.period}
                                    </div>
                                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                                        {edu.details}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
