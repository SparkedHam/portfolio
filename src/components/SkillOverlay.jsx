import React from 'react';

const SkillOverlay = ({ skill, onClose }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 p-8 rounded-lg max-w-md text-gray-100 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-100 hover:text-red-500"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold flex items-center justify-center">{skill.name}</h2>
                <p className="mt-4">{skill.details}</p>
                {skill.subSkills && (
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                        {skill.subSkills.map((subSkill) => (
                            <li
                                key={subSkill.name}
                                className={`p-2 rounded-md text-center ${subSkill.color}`}
                            >
                                <span className="text-2xl flex items-center justify-center mb-1">{subSkill.icon}</span>
                                <span className="block">{subSkill.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SkillOverlay;
