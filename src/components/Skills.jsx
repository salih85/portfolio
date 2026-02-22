import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Smartphone, Globe } from 'lucide-react'

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            icon: <Layout className="text-accent" />,
            skills: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "EJS"]
        },
        {
            title: "Backend",
            icon: <Server className="text-accent" />,
            skills: ["Node.js", "Express.js", "JWT", "WebSocket", "REST APIs"]
        },
        {
            title: "Database",
            icon: <Database className="text-accent" />,
            skills: ["MongoDB", "Mongoose"]
        },
        {
            title: "Tools & Others",
            icon: <Globe className="text-accent" />,
            skills: ["Git", "GitHub", "Yjs", "WebRTC", "Google OAuth"]
        }
    ]

    return (
        <section id="skills" className="py-24 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Core Skills</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Tech Stack & Expertise</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent/50 transition-colors group"
                        >
                            <div className="mb-6 p-4 bg-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-6">{category.title}</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
