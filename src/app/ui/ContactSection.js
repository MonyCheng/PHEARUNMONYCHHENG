import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="gradient-text">Contact Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6 text-green-400">Contact Information</h3>
                        <p className="text-gray-300">Feel free to reach out! I&apos;m open to new opportunities and collaborations.</p>
                        <div className="flex items-center space-x-3 text-gray-400">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-400" />
                            <span>Russey Keo, Phnom Penh, Cambodia</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-400">
                            <FontAwesomeIcon icon={faPhone} className="text-green-400" />
                            <span>069216353</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-400">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
                            {/* <span>pcheng089@gmail.com</span> */}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://github.com/MonyCheng" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/phearunmony-chheng-45a4a5231/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
