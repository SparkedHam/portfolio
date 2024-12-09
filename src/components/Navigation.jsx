import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperclip, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Menu */}
            <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow z-10 md:hidden">
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-gray-100 text-xl font-bold">Menu</h1>
                    <button onClick={toggleSidebar} className="text-gray-100 hover:text-blue-500 text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg z-20 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300`}
            >
                <div className="flex flex-col h-full p-4">
                    <div className="mb-8">
                        <button onClick={closeSidebar} className="text-gray-100 hover:text-blue-500 text-2xl">
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="space-y-6 text-gray-100">
                        {['Home', 'Skills', 'Work', 'Education'].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    className="block cursor-pointer text-lg hover:text-blue-500"
                                    onClick={closeSidebar}
                                >
                                    {section}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto space-y-4 text-gray-100">
                        <a
                            href="https://github.com/SparkedHam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg hover:text-blue-500"
                        >
                            <FaGithub className="inline mr-2" /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zachary-cunningham-672ab5186/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg hover:text-blue-500"
                        >
                            <FaLinkedin className="inline mr-2" /> LinkedIn
                        </a>
                        <a
                            href="mailto:cunninghamz6631@my.uwstout.edu"
                            className="block text-lg hover:text-blue-500"
                        >
                            <FaEnvelope className="inline mr-2" /> Email
                        </a>
                        <a href="/Zachary_Cunningham_Resume.pdf" className="block text-lg hover:text-blue-500">
                            <FaPaperclip className="inline mr-2" /> Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed top-0 w-full bg-gray-800 shadow z-10">
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
                            <FaGithub className="text-gray-100 hover:text-blue-500 text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zachary-cunningham-672ab5186/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-gray-100 hover:text-blue-500 text-2xl" />
                        </a>
                        <a href="mailto:cunninghamz6631@my.uwstout.edu">
                            <FaEnvelope className="text-gray-100 hover:text-blue-500 text-2xl" />
                        </a>
                        <a href="/Zachary_Cunningham_Resume.pdf">
                            <FaPaperclip className="text-gray-100 hover:text-blue-500 text-2xl" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
