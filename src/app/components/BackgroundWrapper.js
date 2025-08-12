'use client';
import React from 'react';
import { useColors } from '../contexts/ColorContext';

const BackgroundWrapper = ({ children }) => {
    const { currentColors, mousePos, shapes } = useColors();

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Dark Texture Background */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    background: `
                        radial-gradient(circle at 20% 20%, ${currentColors.primary}15 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, ${currentColors.secondary}10 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, ${currentColors.accent}08 0%, transparent 50%),
                        linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
                    `
                }}
            />

            {/* Subtle Noise Texture */}
            <div
                className="fixed inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 2px,
                            rgba(255,255,255,0.03) 2px,
                            rgba(255,255,255,0.03) 4px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 2px,
                            rgba(255,255,255,0.03) 2px,
                            rgba(255,255,255,0.03) 4px
                        )
                    `
                }}
            />

            {/* Floating Abstract Shapes */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {shapes.map((shape, index) => (
                    <div
                        key={shape.id}
                        className="absolute transition-all duration-[8000ms] ease-out"
                        style={{
                            left: `${shape.x}%`,
                            top: `${shape.y}%`,
                            width: `${shape.size}px`,
                            height: `${shape.size}px`,
                            background: `
                                radial-gradient(
                                    ellipse at center,
                                    ${shape.color}${Math.floor(shape.opacity * 255).toString(16).padStart(2, '0')} 0%,
                                    transparent 70%
                                )
                            `,
                            transform: `
                                rotate(${shape.rotation + (index * 20)}deg) 
                                translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)
                                scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.1})
                            `,
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            filter: 'blur(40px)',
                            animation: `globalDrift-${index % 3} 20s ease-in-out infinite`
                        }}
                    />
                ))}
            </div>

            {/* Content with relative positioning */}
            <div className="relative z-10">
                {children}
            </div>

            <style jsx>{`
                @keyframes globalDrift-0 {
                    0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
                    33% { transform: translateX(30px) translateY(-30px) rotate(120deg); }
                    66% { transform: translateX(-20px) translateY(20px) rotate(240deg); }
                }
                @keyframes globalDrift-1 {
                    0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
                    33% { transform: translateX(-25px) translateY(35px) rotate(-120deg); }
                    66% { transform: translateX(40px) translateY(-15px) rotate(-240deg); }
                }
                @keyframes globalDrift-2 {
                    0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
                    33% { transform: translateX(20px) translateY(40px) rotate(90deg); }
                    66% { transform: translateX(-35px) translateY(-25px) rotate(180deg); }
                }
            `}</style>
        </div>
    );
};

export default BackgroundWrapper;