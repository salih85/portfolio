import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            company: "Fugipie Technologies",
            role: "Intern",
            period: "December 2025 – March 2026",
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
        <section id="experience" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Professional Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h3>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-accent/20"
                        >
                            {/* Dot on the timeline */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-black" />

                            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                            </div>

                            <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                            <p className="text-accent font-medium text-lg mb-6">{exp.company}</p>

                            <ul className="space-y-3">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                                        <span className="text-accent mt-1.5">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
