'use client';
import React from 'react';
import Image from 'next/image';
import { useColors } from '../contexts/ColorContext';

const ProjectsSection = () => {
    const { currentColors } = useColors();

    const projects = [
        {
            icon: "/assets/icons/woori.png",
            title: 'WOORI Mobile Banking',
            description: 'A mobile banking app for everyday financial tasks including transfers, QR code scanning, and account management.',
            tags: ['Swift', 'iOS', 'Banking'],
            category: 'Mobile Banking',
            gradient: 'from-blue-500 to-cyan-500',
            hoverColor: 'blue', // Added only this
            url: 'https://www.wooribank.com.kh/personal-banking/mobile-banking/',
            status: 'Released'
        },
        {
            icon: "/assets/icons/woori.png",
            title: 'LOAN Collection',
            description: 'An application designed for managing and collecting loan repayments efficiently with automated tracking.',
            tags: ['Swift'],
            category: 'Financial Services',
            gradient: 'from-blue-500 to-cyan-500',
            hoverColor: 'blue', // Added only this
            url: '',
            status: 'Internal app'
        },
        {
            icon: '/assets/icons/woori.png',
            title: 'LOAN Application',
            description: 'A comprehensive platform for loan creation, customer onboarding, credit checking, and request processing.',
            tags: ['Swift', 'Credit System'],
            category: 'Loan Management',
            gradient: 'from-blue-500 to-cyan-500',
            hoverColor: 'blue', // Added only this
            url: '',
            status: 'Internal app'
        },
        {
            icon: '/assets/icons/prince.png',
            title: 'PRINCE Mobile Banking',
            description: 'A secure and user-friendly mobile banking app offering fund transfers, balance inquiry, and transaction history.',
            tags: ['Swift', 'Security'],
            category: 'Mobile Banking',
            gradient: 'from-blue-600 to-indigo-700',
            hoverColor: 'indigo',
            url: 'https://www.princebank.com.kh/digital/prince-mobile-app',
            status: 'Released'
        },
        {
            icon: '/assets/icons/mobileBiz.png',
            title: 'PRINCE MobileBiz',
            description: 'Enterprise-grade mobile banking for companies with multi-receiver transfers, maker-checker-approver workflow, and detailed transaction tracking.',
            tags: ['Swift', 'gRPC'],
            category: 'Enterprise Banking',
            gradient: 'from-violet-500 to-purple-500',
            hoverColor: 'purple', // Added only this
            url: '',
            status: 'Incoming'
        }
    ];

    // Helper function to get status badge styling
    const getStatusBadge = (status) => {
        if (status === 'Released') {
            return {
                className: 'bg-green-500/20 text-green-300 border-green-400/30',
                icon: '✓'
            };
        }
        if (status === 'Internal app') {
            return {
                className: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
                icon: '🔒'
            };
        }
        if (status === 'Incoming') {
            return {
                className: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
                icon: '⏳'
            };
        }
        return {
            className: 'bg-gray-500/20 text-gray-300 border-gray-400/30',
            icon: '⚪'
        };
    };

    // Only added these functions for dynamic hover colors - MADE SOFTER
    const getHoverShadow = (hoverColor) => {
        if (hoverColor === 'blue') return 'hover:shadow-blue-500/10';
        if (hoverColor === 'orange') return 'hover:shadow-orange-500/10';
        if (hoverColor === 'purple') return 'hover:shadow-purple-500/10';
        return 'hover:shadow-blue-500/10';
    };

    const getTitleHover = (hoverColor) => {
        if (hoverColor === 'blue') return 'group-hover:text-blue-200';
        if (hoverColor === 'orange') return 'group-hover:text-orange-200';
        if (hoverColor === 'purple') return 'group-hover:text-purple-200';
        return 'group-hover:text-blue-200';
    };

    const getGlowHover = (hoverColor) => {
        if (hoverColor === 'blue') return 'group-hover:from-blue-500/3 group-hover:via-cyan-500/2 group-hover:to-blue-500/3';
        if (hoverColor === 'orange') return 'group-hover:from-orange-500/3 group-hover:via-red-500/2 group-hover:to-orange-500/3';
        if (hoverColor === 'purple') return 'group-hover:from-violet-500/3 group-hover:via-purple-500/2 group-hover:to-violet-500/3';
        return 'group-hover:from-blue-500/3 group-hover:via-purple-500/2 group-hover:to-pink-500/3';
    };

    const getBorderHover = (hoverColor) => {
        if (hoverColor === 'blue') return 'group-hover:from-blue-500/8 group-hover:via-cyan-500/6 group-hover:to-blue-500/8';
        if (hoverColor === 'orange') return 'group-hover:from-orange-500/8 group-hover:via-red-500/6 group-hover:to-orange-500/8';
        if (hoverColor === 'purple') return 'group-hover:from-violet-500/8 group-hover:via-purple-500/6 group-hover:to-violet-500/8';
        return 'group-hover:from-blue-500/8 group-hover:via-purple-500/6 group-hover:to-pink-500/8';
    };

    return (
        <section id="projects" className="">
            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="h-full flex flex-col justify-center py-24">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-2xl transition-all duration-1000"
                            style={{
                                background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.secondary})`,
                                boxShadow: `0 25px 50px -12px ${currentColors.primary}25`
                            }}
                        >
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            <span className="transition-all duration-1000">
                                My Projects
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Innovative mobile banking solutions and financial applications built with cutting-edge technology
                        </p>

                        <div className="mt-8 flex justify-center">
                            <div
                                className="w-24 h-1 rounded-full transition-all duration-1000"
                                style={{
                                    background: `linear-gradient(90deg, ${currentColors.primary}, ${currentColors.accent})`
                                }}
                            />
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${getHoverShadow(project.hoverColor)}`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'fadeInUp 0.8s ease-out forwards'
                                }}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 ${getGlowHover(project.hoverColor)} rounded-3xl transition-all duration-500`}></div>

                                {/* Category Badge and Status Badge */}
                                <div className="absolute -top-3 left-6 flex gap-2">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusBadge(project.status).className}`}>
                                        <span className="mr-1">{getStatusBadge(project.status).icon}</span>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Project Icon */}
                                <div className={`relative bg-gradient-to-br ${project.gradient} h-52 rounded-2xl mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl`}>
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                    <Image
                                        src={project.icon}
                                        alt={project.title}
                                        width={120}
                                        height={120}
                                        className="relative z-10 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Floating Elements */}
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className={`text-2xl font-bold text-white mb-4 ${getTitleHover(project.hoverColor)} transition-colors duration-300`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    {project.url ? (
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => window.open(project.url, '_blank')}
                                                className="flex-1 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn bg-currentColor"
                                            // style={{
                                            //     background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.secondary})`,
                                            //     boxShadow: `0 10px 30px ${currentColors.primary}25`
                                            // }}
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    View Project
                                                </span>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-center py-3">
                                            <span className="text-gray-400 text-sm italic">
                                                {project.status === 'Internal app' ? 'Internal application' :
                                                    project.status === 'Incoming' ? 'Coming soon' :
                                                        'Publish soon'}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Hover Border Effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 ${getBorderHover(project.hoverColor)} transition-all duration-500 pointer-events-none`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-20">
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                            <span className="text-gray-300 font-medium">Want to see more projects?</span>
                            <div
                                className="flex items-center gap-2 transition-colors duration-300"
                                style={{ color: currentColors.primary }}
                            >
                                <span className="font-semibold">View All</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;