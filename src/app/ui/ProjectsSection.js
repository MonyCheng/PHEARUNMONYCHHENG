import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
const ProjectsSection = () => {
    const projects = [
        {
            icon: 'https://brandlogos.net/wp-content/uploads/2022/07/woori_bank-logo_brandlogos.net_ciu1i.png',
            title: 'WOORI Mobile Banking',
            description: 'A mobile banking app for everyday financial tasks including transfers, QR code scanning, and account management.',
            tags: ['Swift'],
            github: '#',
            demo: '#',
        },
        {
            icon: 'https://brandlogos.net/wp-content/uploads/2022/07/woori_bank-logo_brandlogos.net_ciu1i.png',
            title: 'LOAN Collection',
            description: 'An application designed for managing and collecting loan repayments efficiently.',
            tags: ['Swift'],
            github: '#',
            demo: '#',
        },
        {
            icon: 'https://brandlogos.net/wp-content/uploads/2022/07/woori_bank-logo_brandlogos.net_ciu1i.png',
            title: 'LOAN Application',
            description: 'A platform for loan creation, including customer onboarding, credit checking (CBC), and loan request processing.',
            tags: ['Swift'],
            github: '#',
            demo: '#',
        },
        {
            icon: '/assets/icons/prince.png',
            title: 'PRINCE Mobile Banking',
            description: 'A secure and user-friendly mobile banking app offering features like fund transfers, balance inquiry, and transaction history.',
            tags: ['Swift'],
            github: '#',
            demo: '#',
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {/* <span className="code-font text-green-400">&lt;</span> */}
                    <span className="gradient-text">My Projects</span>
                    {/* <span className="code-font text-green-400">/&gt;</span> */}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card rounded-xl p-6">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                                <img src={project.icon} alt={`${project.title}`} width={300} height={300} className="h-24 object-contain" />

                            </div>
                            <h1 className="md:text-xl font-bold text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="text-gray mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">{tag}</span>
                                ))}
                            </div>
                            {/* <div className="flex space-x-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded transition-colors text-center">
                                    <FontAwesomeIcon icon={faGithub} className="mr-2" />Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 border border-blue-600 hover:bg-blue-600/10 py-2 rounded transition-colors text-center">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />Demo
                                </a>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;