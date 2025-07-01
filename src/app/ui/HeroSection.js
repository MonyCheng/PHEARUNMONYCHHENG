'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSection = () => {
    const [typingText, setTypingText] = useState('');
    const fullText = 'I build accessible, pixel-perfect digital experiences Mobile Banking for WOORI Bank & PRINCE Bank Cambodia';
    const typingSpeed = 100;

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setTypingText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero-section min-h-screen flex items-center justify-center relative">
            {/* Floating Code Elements */}
            <div className="floating-code top-50 left-30" style={{ animationDelay: '-6s' }}>
                var skills = [&apos;Swift&apos;, &apos;Flutter&apos;, &apos;Next.JS&apos;];
            </div>
            <div className="floating-code top-40 right-20" style={{ animationDelay: '-3s' }}>
                func () &#123; return &apos;innovation&apos;; &#125;
            </div>
            <div className="floating-code bottom-32 left-20" style={{ animationDelay: '-2s' }}>
                &lt;div className=&quot;developer-mindset&quot;&gt;
            </div>
            <div className="floating-code bottom-20 right-10" style={{ animationDelay: '-4s' }}>
                git commit -m &quot;Level up complete&quot;
            </div>

            <div className="text-center z-10 max-w-4xl mx-auto px-6">
                <div className="mb-6">
                    <span className="code-font text-green-400 text-lg">&lt;-----/&gt;</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                    <span className="gradient-text">iOS</span><br />
                    <span className="neon-glow">Engineering</span>
                </h1>
                <div className="mb-6">
                    <span className="code-font text-green-400 text-lg">&lt;-----/&gt;</span>
                </div>

                <div className="code-font text-xl md:text-2xl mb-8 text-gray-300">
                    <span id="typingText" className="typing-animation">{typingText}</span>
                </div>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Passionate about creating innovative solutions through code. Currently
                    modern web technologies and software development practices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="#projects" className="border-2 border-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400/10 transition-all duration-300">
                        View My Work
                    </Link>
                    <Link href="#contact" className="border-2 border-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400/10 transition-all duration-300">
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
