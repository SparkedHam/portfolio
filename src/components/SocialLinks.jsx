import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperclip } from 'react-icons/fa';

const SocialLinks = () => {
    const links = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-4xl" />,
            url: 'https://github.com/SparkedHam',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-4xl" />,
            url: 'https://www.linkedin.com/in/zachary-cunningham-672ab5186/',
        },
        {
            name: 'Email',
            icon: <FaEnvelope className="text-4xl" />,
            url: 'mailto:cunninghamz6631@my.uwstout.edu',
        },
        {
            name: 'Resume',
            icon: <FaPaperclip className="text-4xl" />,
            url: '/Zachary_Cunningham_Resume.pdf',
        },
    ];

    return (
        <section id="social-links" className="p-6 md:p-12 lg:p-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Connect With Me</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-blue-600 text-gray-100 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    >
                        <div className="flex flex-col items-center">
                            {link.icon}
                            <span className="mt-2 font-medium">{link.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialLinks;
