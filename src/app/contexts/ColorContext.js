'use client';
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

const ColorContext = createContext();

export const useColors = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColors must be used within a ColorProvider');
    }
    return context;
};

export const ColorProvider = ({ children }) => {
    const [activeColor, setActiveColor] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [shapes, setShapes] = useState([]);

    // Wrap colorPalette in useMemo to prevent recreation on every render
    const colorPalette = useMemo(() => [
        { primary: '#00D9FF', secondary: '#FF6B9D', accent: '#C77DFF' },
        { primary: '#FF9500', secondary: '#00F5FF', accent: '#39FF14' },
        { primary: '#FF1744', secondary: '#00BCD4', accent: '#FFEB3B' },
        { primary: '#9C27B0', secondary: '#4CAF50', accent: '#FF5722' }
    ], []);

    // Auto color change
    useEffect(() => {
        const colorTimer = setInterval(() => {
            setActiveColor(prev => (prev + 1) % colorPalette.length);
        }, 3000);
        return () => clearInterval(colorTimer);
    }, [colorPalette.length]); // Add colorPalette.length as dependency

    // Update CSS custom properties
    useEffect(() => {
        const currentColors = colorPalette[activeColor];
        const root = document.documentElement;

        root.style.setProperty('--current-primary', currentColors.primary);
        root.style.setProperty('--current-secondary', currentColors.secondary);
        root.style.setProperty('--current-accent', currentColors.accent);
    }, [activeColor, colorPalette]); // Add colorPalette as dependency

    // Generate floating shapes
    useEffect(() => {
        const generateShapes = () => {
            const newShapes = Array.from({ length: 12 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 200 + 100,
                rotation: Math.random() * 360,
                color: colorPalette[Math.floor(Math.random() * colorPalette.length)].primary,
                opacity: Math.random() * 0.15 + 0.05
            }));
            setShapes(newShapes);
        };

        generateShapes();
    }, [activeColor, colorPalette]); // Add colorPalette as dependency

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const currentColors = colorPalette[activeColor];

    const value = {
        activeColor,
        setActiveColor,
        colorPalette,
        currentColors,
        colors: currentColors, // Add this alias for your components that expect 'colors'
        mousePos,
        shapes
    };

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
};