import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="code-font text-green-400">&lt;</span>
                    <span className="gradient-text">Contact Me</span>
                    <span className="code-font text-green-400">/&gt;</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="contact-form rounded-lg p-8">
                        <h3 className="text-2xl font-semibold mb-6 text-green-400">Let's Connect!</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700" placeholder="Your Email" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                                <textarea id="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6 text-green-400">Contact Information</h3>
                        <p className="text-gray-300">Feel free to reach out! I'm open to new opportunities and collaborations.</p>
                        <div className="flex items-center space-x-3 text-gray-400">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-400" />
                            <span>Phnom Penh, Cambodia</span> {/* Replace with your actual location */}
                        </div>
                        <div className="flex items-center space-x-3 text-gray-400">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
                            <span>your.email@example.com</span> {/* Replace with your actual email */}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            {/* Add more social links as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;