import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const SkillSection = () => {
    const courses = [
        {
            icon: '📱',
            title: 'Swift',
            progress: 85,
            description: 'Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and database management.',
            tags: ['Swift'],
            duration: '3 years',
        },
        {
            icon: '🌎',
            title: 'Next.js',
            progress: 92,
            description: 'From basics to advanced Python concepts including OOP, data structures.',
            tags: ['Next.js'],
            duration: '4 months',
        },
        {
            icon: '📱',
            title: 'Kotlin',
            progress: 70,
            description: 'Learning Kotlin to build native mobile applications.',
            tags: ['Kotlin'],
            duration: '2 months',
        },
    ];

    return (
        <section id="courses" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="gradient-text">Development</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card rounded-xl p-6 relative">
                            <div className="text-4xl mb-4">{course.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-green-400">{course.title}</h3>
                            <div className="mb-4">
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Progress</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="progress-bar2 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">{course.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {course.tags.map((tag, i) => (
                                    <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                                ))}
                            </div>
                            <div className="text-sm text-gray-400">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                Duration: {course.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;