import React from 'react'

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Mohammed Salih.k. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-6 text-xs text-gray-600 uppercase tracking-widest font-bold">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
