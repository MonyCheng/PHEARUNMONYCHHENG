'use client'; // This component needs to run in the browser to use useState and useEffect

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setMobileMenuOpen(false); // Close mobile menu on scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-code-green rounded-full animate-pulse shadow-md shadow-code-green/50"></div>
                        <span className="code-font text-green-400">&lt;Pharunmony chheng/&gt;</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href="#about" className="hover:text-green-400 transition-colors">Me</Link>
                        <Link href="#experinces" className="hover:text-green-400 transition-colors">Experinces</Link>
                        <Link href="#courses" className="hover:text-green-400 transition-colors">Projects</Link>
                        <Link href="#projects" className="hover:text-green-400 transition-colors">Education</Link>
                        <Link href="#skills" className="hover:text-green-400 transition-colors">Skills</Link>
                    </div>
                    <button className="md:hidden text-xl" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md">
                    <div className="px-6 py-4 space-y-4">
                        <Link href="#about" className="block hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Me</Link>
                        <Link href="#experinces" className="block hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Experinces</Link>
                        <Link href="#courses" className="block hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
                        <Link href="#projects" className="block hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                        <Link href="#skills" className="block hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
                        <Link href="#contact" className="block hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;