import React from 'react';
import profile from "../lib/profile.json";

const SlideInText = () => {
    return (
        <div className="slide-in-container">
            {profile.techStack.map((tech) => (
                <span key={tech} className="slide-in-text">{tech}</span>
            ))}
        </div>
    );
};

export default SlideInText;
