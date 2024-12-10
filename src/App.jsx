//App.jsx
import React, {useState} from 'react';
import Navigation from './components/Navigation.jsx';
import SkillOverlay from './components/SkillOverlay.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import {
    SiJavascript,
    SiCplusplus,
    SiC,
    SiTypescript,
    SiGnubash,
    SiAnsible,
    SiReact,
    SiVuedotjs,
    SiExpress,
    SiHtml5,
    SiPhp,
    SiCss3,
    SiTailwindcss,
    SiLinux,
} from 'react-icons/si';
import {FaNodeJs, FaJava, FaUsers, FaClipboardList} from 'react-icons/fa';
import {FaComputer} from 'react-icons/fa6';
import {RiCustomerService2Line} from 'react-icons/ri';

const App = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = [
        {
            name: 'Team Leadership',
            icon: <FaUsers/>,
            color: 'bg-blue-500',
            details: 'Experienced in leading teams to achieve project goals effectively while fostering collaboration and innovation.'
        },
        {
            name: 'Programming',
            icon: <FaComputer/>,
            color: 'bg-green-500',
            details: 'Proficient in multiple programming languages, including:',
            subSkills: [
                {name: 'Java', icon: <FaJava className="text-red-500"/>, color: 'bg-gray-700'},
                {name: 'JavaScript', icon: <SiJavascript className="text-yellow-500"/>, color: 'bg-gray-700'},
                {name: 'Node.js', icon: <FaNodeJs className="text-green-400"/>, color: 'bg-gray-700'},
                {name: 'C++', icon: <SiCplusplus className="text-blue-400"/>, color: 'bg-gray-700'},
                {name: 'C', icon: <SiC className="text-blue-500"/>, color: 'bg-gray-700'},
                {name: 'TypeScript', icon: <SiTypescript className="text-blue-300"/>, color: 'bg-gray-700'},
                {name: 'Shell Scripting', icon: <SiGnubash className="text-green-500"/>, color: 'bg-gray-700'},
                {name: 'Ansible', icon: <SiAnsible className="text-red-400"/>, color: 'bg-gray-700'},
            ]
        },
        {
            name: 'Web Development',
            icon: <SiHtml5/>,
            color: 'bg-purple-500',
            details: 'Skilled in creating modern, responsive web applications using:',
            subSkills: [
                {name: 'React', icon: <SiReact className="text-blue-500"/>, color: 'bg-gray-700'},
                {name: 'Vue', icon: <SiVuedotjs className="text-green-500"/>, color: 'bg-gray-700'},
                {name: 'Express.js', icon: <SiExpress className="text-gray-500"/>, color: 'bg-gray-700'},
                {name: 'Node.js', icon: <FaNodeJs className="text-green-400"/>, color: 'bg-gray-700'},
                {name: 'HTML', icon: <SiHtml5 className="text-orange-500"/>, color: 'bg-gray-700'},
                {name: 'PHP', icon: <SiPhp className="text-purple-600"/>, color: 'bg-gray-700'},
                {name: 'CSS', icon: <SiCss3 className="text-blue-400"/>, color: 'bg-gray-700'},
                {name: 'Tailwind', icon: <SiTailwindcss className="text-teal-500"/>, color: 'bg-gray-700'},
            ]
        },
        {
            name: 'Linux System Administration',
            icon: <SiLinux/>,
            color: 'bg-gray-700',
            details: 'Expertise in managing Debian/Ubuntu-based systems, automating tasks using Ansible, and ensuring system uptime and security.',
        },
        {
            name: 'Customer Service',
            icon: <RiCustomerService2Line/>,
            color: 'bg-red-500',
            details: 'Skilled in engaging with clients, resolving issues promptly, and maintaining positive relationships.'
        },
        {
            name: 'Project Management',
            icon: <FaClipboardList/>,
            color: 'bg-yellow-500',
            details: 'Experienced in planning, executing, and delivering projects on time and within budget.'
        },
    ];

        const closeOverlay = () => setSelectedSkill(null);

        return (
            <div className="font-sans bg-gray-900 text-gray-100">
                <Navigation/>

                {/* Header Section */}
                <section
                    id="home"
                    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-gray-900 to-black"
                >
                    <div className="absolute inset-0 opacity-25 bg-stars"></div>
                    <div className="text-center z-10">
                        <h1 className="text-6xl font-extrabold">
                            {Array.from('Zachary Cunningham').map((letter, index) => (
                                <span
                                    key={index}
                                    className="inline-block animate-letter-reveal"
                                    style={{
                                        animationDelay: `${index * 0.05}s`,
                                        display: letter === ' ' ? 'inline' : 'inline-block',
                                    }}
                                >
                    {letter}
                </span>
                            ))}
                        </h1>
                        <p
                            className="text-lg mt-4 opacity-0 animate-slide-up-fade"
                            style={{
                                animationDelay: '1.5s',
                                animationFillMode: 'forwards',
                            }}
                        >
                            Driven Systems Administrator & Software Engineer
                        </p>
                    </div>
                </section>


                {/* Skills Section */}
                <section id="skills"
                         className="p-6 md:p-12 lg:p-32 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {skills.map((skill) => (
                            <button
                                key={skill.name}
                                className={`transform transition duration-300 hover:scale-105 p-6 rounded-lg shadow-md text-center ${skill.color} text-gray-100 hover:shadow-xl`}
                                onClick={() => setSelectedSkill(skill)}
                            >
                                <span className="text-4xl flex items-center justify-center mb-2">{skill.icon}</span>
                                <p className="mt-2 font-medium">{skill.name}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Work Section */}
                <section id="work" className="p-6 md:p-12 lg:p-32 bg-gradient-to-tl from-gray-900 to-gray-800">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Work History</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="transform transition duration-300 hover:scale-105 bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-semibold">System Administrator</h3>
                            <p className="text-gray-400">Sparked Host LLC (Jan 2022 - Present)</p>
                            <ul className="list-disc mt-4 pl-4">
                                <li>Managed onboarding/offboarding of employees</li>
                                <li>Provisioned software/hardware per security policies</li>
                                <li>Oversaw hundreds of Linux-based systems</li>
                            </ul>
                        </div>
                        <div
                            className="transform transition duration-300 hover:scale-105 bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-semibold">Producer</h3>
                            <p className="text-gray-400">Just in Live Stream (Dec 2020 - Present)</p>
                            <ul className="list-disc mt-4 pl-4">
                                <li>Managed live streams ensuring optimal user experience</li>
                                <li>Developed software for streamlined live streaming</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education"
                         className="p-6 md:p-12 lg:p-32 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="transform transition duration-300 hover:scale-105 bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-semibold">University of Wisconsin-Eau Claire</h3>
                            <p className="text-gray-400">B.S. Software Engineering</p>
                            <p className="text-gray-400">Sep 2019 - May 2022 (Transferred)</p>
                        </div>
                        <div
                            className="transform transition duration-300 hover:scale-105 bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-semibold">University of Wisconsin-Stout</h3>
                            <p className="text-gray-400">B.S. Computer Science (Cyber Security Concentration)</p>
                            <p className="text-gray-400">Sep 2022 - May 2025 (Expected)</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <SocialLinks />

                {/* Footer Section */}
                <footer className="p-4 bg-gray-800 text-center">
                    <p>&copy; {new Date().getFullYear()} Zachary Cunningham. All rights reserved.</p>
                </footer>

                {/* Skill Overlay */}
                {selectedSkill && (
                    <SkillOverlay skill={selectedSkill} onClose={closeOverlay}/>
                )}
            </div>
        );
    };
export default App;
