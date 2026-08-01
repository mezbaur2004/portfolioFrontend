import React from 'react';

const techStack = ['MERN', 'Moodle', 'Woocommerce', 'Shopify', 'Linux'];

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
