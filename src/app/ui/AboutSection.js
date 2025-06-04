import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {/* <span className="code-font text-green-400">&lt;</span> */}
                    <span className="gradient-text">Me or Chheng</span>
                    {/* <span className="code-font text-green-400">/&gt;</span> */}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-64 h-64 mx-auto bg-slate-700 text-slate-400 rounded-full flex items-center justify-center text-8xl">
                            👨‍💻
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-green-400">Hello, I'm a Chheng!</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm passionate about software development and constantly learning new technologies.
                            My journey in programming started with curiosity and has evolved into a deep
                            commitment to creating meaningful digital solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-400 mb-2">Focus Areas</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• Web Development</li>
                                    <li>• Mobile Apps</li>
                                    <li>• UI/UX Design</li>
                                </ul>
                            </div>

                            <div className="bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-400 mb-2">Interests</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• AI & Machine Learning</li>
                                    <li>• DevOp</li>
                                    <li>• Open Source</li>
                                    <li>• Tech Innovation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;