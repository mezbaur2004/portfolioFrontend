import React from 'react';

const techStack = ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'];

const SlideInText = () => {
    return (
        <div className="slide-in-container">
            {techStack.map((tech) => (
                <span key={tech} className="slide-in-text">{tech}</span>
            ))}
        </div>
    );
};

export default SlideInText;
