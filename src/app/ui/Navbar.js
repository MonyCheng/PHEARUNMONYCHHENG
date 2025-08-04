'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            const navbarHeight = 80; // Adjust based on your navbar height
            const elementPosition = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false); // Close mobile menu after clicking
    };

    // Handle click for navigation links
    const handleNavClick = (e, href) => {
        e.preventDefault();
        scrollToSection(href);
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

    const desktopNavItems = [
        { href: '#about', label: 'Me' },
        { href: '#experinces', label: 'Experinces' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' }
    ];

    const mobileNavItems = [
        { href: '#about', label: 'Me' },
        { href: '#experinces', label: 'Experinces' },
        { href: '#courses', label: 'Courses' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-md shadow-green-400/50"></div>
                        <span className="font-mono text-green-400">&lt;Pharunmony chheng/&gt;</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {desktopNavItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="hover:text-green-400 transition-colors duration-300 cursor-pointer text-white"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-xl hover:text-green-400 transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700">
                    <div className="px-6 py-4 space-y-4">
                        {mobileNavItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block w-full text-left hover:text-green-400 transition-colors duration-300 py-2 text-white"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;