'use client';
import React from 'react';
import { useColors } from '../contexts/ColorContext';

const AboutSection = () => {
    const { colors } = useColors();

    // Fallback colors in case context is not ready
    const fallbackColors = {
        primary: '#3B82F6',
        secondary: '#1E40AF',
        accent: '#60A5FA'
    };

    // Use fallback colors if colors is undefined
    const safeColors = colors || fallbackColors;

    return (
        <section id="about" className="section-fullscreen">
            <div className="container w-full">
                <div className="space-y-16 h-full flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                        <span className="transition-all duration-1000">
                            Phearunmony chheng
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div
                                className="w-64 h-64 text-slate-400 rounded-full flex items-center justify-center text-8xl transition-all duration-1000 relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, rgba(51, 65, 85, 0.6), rgba(30, 41, 59, 0.8))`,
                                    border: `2px solid white-200`,
                                    boxShadow: `0 0 40px ${safeColors.primary}20`
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-10 transition-all duration-1000"
                                    style={{
                                        background: `radial-gradient(circle at center, ${safeColors.accent}30 0%, transparent 70%)`
                                    }}
                                />
                                <span className="relative z-10">👨‍💻</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3
                                className="text-3xl font-bold transition-all duration-1000"
                                style={{ color: safeColors.secondary }}
                            >
                                Hello, I&apos;m a Chheng!
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I&apos;m passionate about software development and constantly learning new technologies.
                                My journey in programming started with curiosity and has evolved into a deep
                                commitment to creating meaningful digital solutions.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className="p-4 rounded-lg transition-all duration-500 hover:scale-105 border border-gray-700"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(31, 41, 59, 0.6), rgba(51, 65, 85, 0.4))`,
                                        borderLeft: `3px solid ${safeColors.primary}`
                                    }}
                                >
                                    <h4
                                        className="font-semibold mb-2 transition-all duration-1000"
                                        style={{ color: safeColors.primary }}
                                    >
                                        Focus Areas
                                    </h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• Web Development</li>
                                        <li>• Mobile Apps</li>
                                        <li>• UI/UX Design</li>
                                    </ul>
                                </div>

                                <div
                                    className="p-4 rounded-lg transition-all duration-500 hover:scale-105 border border-gray-700"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(31, 41, 59, 0.6), rgba(51, 65, 85, 0.4))`,
                                        borderLeft: `3px solid ${safeColors.accent}`
                                    }}
                                >
                                    <h4
                                        className="font-semibold mb-2 transition-all duration-1000"
                                        style={{ color: safeColors.accent }}
                                    >
                                        Interests
                                    </h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• AI & Machine Learning</li>
                                        <li>• DevOps</li>
                                        <li>• Open Source</li>
                                        <li>• Tech Innovation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;