'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { useColors } from '../contexts/ColorContext';

const HeroSection = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const { currentColors, activeColor, setActiveColor, colorPalette } = useColors();

    // Wrap creativePhrases in useMemo to prevent recreation on every render
    const creativePhrases = useMemo(() => [
        "THINK DIFFERENT",
        "CREATE MAGIC",
        "BUILD DREAMS",
        "CODE ART"
    ], []);

    const projects = [
        {
            title: "WOORI BANK",
            category: "iOS Banking Solution",
            color: "#00D9FF",
            angle: "8deg"
        },
        {
            title: "PRINCE BANK",
            category: "Financial Technology",
            color: "#2F388D", // Using your Prince Bank brand color
            angle: "-5deg"
        },
    ];

    useEffect(() => {
        const wordTimer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentWord(prev => (prev + 1) % creativePhrases.length);
                setIsAnimating(false);
            }, 300);
        }, 2500);
        return () => clearInterval(wordTimer);
    }, [creativePhrases.length]); // Add creativePhrases.length as dependency

    return (
        <section className="section-fullscreen">
            <div className="container mx-auto px-12 w-full">
                <div className="grid lg:grid-cols-12 gap-16 items-center h-full">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="hero-title">
                                    iOS Engineering
                                </div>

                                <div className="relative h-16 overflow-hidden">
                                    <div
                                        className={`hero-subtitle transition-all duration-500 transform ${isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                                            }`}
                                        style={{ color: currentColors?.secondary }}
                                    >
                                        {creativePhrases[currentWord]}
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="accent-line w-12 transition-all duration-1000" />
                                    <div className="accent-line-secondary w-6 transition-all duration-1000" />
                                </div>
                            </div>

                            <div className="max-w-xl space-y-6">
                                <p className="hero-description">
                                    We believe in the power of simplicity. Every line of code,
                                    every pixel, every interaction is carefully crafted to create
                                    experiences that feel effortless yet profound.
                                </p>

                                <div className="flex items-center space-x-12">
                                    <button className="btn-primary">
                                        <span className="relative z-10">View Portfolio</span>
                                    </button>

                                    <button className="btn-secondary">
                                        <span className="relative z-10">Start Project</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Projects */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="text-xs text-white uppercase tracking-widest mb-8">
                            Work experiences
                        </div>

                        <div className="space-y-6">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="project-card"
                                    style={{
                                        transform: `rotate(${project.angle})`,
                                        borderLeft: `4px solid ${project.color}`,
                                    }}
                                >
                                    <div className="project-content">
                                        <div className="project-category">{project.category}</div>
                                        <div className="project-title">{project.title}</div>
                                        <div
                                            className="project-accent"
                                            style={{ backgroundColor: project.color }}
                                        />
                                    </div>

                                    <div
                                        className="project-dot"
                                        style={{ backgroundColor: project.color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Color Switchers - Positioned at bottom */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                        {colorPalette && colorPalette.map((palette, index) => (
                            <button
                                key={index}
                                className={`color-switcher ${index === activeColor ? 'active' : ''}`}
                                style={{ backgroundColor: palette.primary }}
                                onClick={() => setActiveColor(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;