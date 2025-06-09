import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3Alt,
    faSwift,
    faFlutter,
} from '@fortawesome/free-brands-svg-icons';
import { NEXT_HMR_REFRESH_HASH_COOKIE } from 'next/dist/client/components/app-router-headers';

const SkillsSection = () => {
    const skills = [
        { name: 'Swift', icon: faSwift, color: '#E34F26' },
        { name: 'Kotlin', icon: faCss3Alt, color: '#1572B6' },
        { name: 'Flutter', icon: faFlutter, color: '#F7DF1E' },
        { name: 'Next.JS', icon: NEXT_HMR_REFRESH_HASH_COOKIE, color: '#61DAFB' },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="gradient-text">My Skills</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-green-500/20">
                            <div className="text-5xl mb-3" style={{ color: skill.color }}>
                            </div>
                            <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;