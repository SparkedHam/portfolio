import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperclip } from 'react-icons/fa';

const Navigation = () => (
    <nav className="fixed top-0 w-full bg-gray-800 shadow z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
            <ul className="flex space-x-4">
                {['Home', 'Skills', 'Work', 'Education'].map((section) => (
                    <li key={section}>
                        <Link
                            to={section.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-gray-100 hover:text-blue-500"
                        >
                            {section}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex space-x-4">
                <a href="https://github.com/SparkedHam" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-100 hover:text-blue-500 text-2xl"/>
                </a>
                <a href="https://www.linkedin.com/in/zachary-cunningham-672ab5186/" target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-100 hover:text-blue-500 text-2xl"/>
                </a>
                <a href="mailto:cunninghamz6631@my.uwstout.edu">
                    <FaEnvelope className="text-gray-100 hover:text-blue-500 text-2xl"/>
                </a>
                <a href="/Zachary_Cunningham_Resume.pdf">
                    <FaPaperclip className="text-gray-100 hover:text-blue-500 text-2xl"/>
                </a>
            </div>
        </div>
    </nav>
);

export default Navigation;
