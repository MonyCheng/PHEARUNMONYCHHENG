import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faPython,
    faGitAlt,
    faSwift,
    faFlutter,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { NEXT_HMR_REFRESH_HASH_COOKIE } from 'next/dist/client/components/app-router-headers';

const SkillsSection = () => {
    const skills = [
        { name: 'Swift', icon: faSwift, color: '#E34F26' },
        { name: 'Kotlin', icon: faCss3Alt, color: '#1572B6' },
        { name: 'Flutter', icon: faFlutter, color: '#F7DF1E' },
        { name: 'Next.JS', icon: NEXT_HMR_REFRESH_HASH_COOKIE, color: '#61DAFB' },
        // { name: 'Node.js', icon: faNodeJs, color: '#68A06A' },
        // { name: 'Python', icon: faPython, color: '#3776AB' },
        // { name: 'Git', icon: faGitAlt, color: '#F05032' },
        // { name: 'Databases', icon: faDatabase, color: '#00758F' },
        // Add more skills as needed
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {/* <span className="code-font text-green-400">&lt;</span> */}
                    <span className="gradient-text">My Skills</span>
                    {/* <span className="code-font text-green-400">/&gt;</span> */}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-green-500/20">
                            <div className="text-5xl mb-3" style={{ color: skill.color }}>
                                <FontAwesomeIcon icon={skill.icon} />
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