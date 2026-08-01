import React from 'react';
import '../../css/skills.css'
import useReveal from "../../others/useReveal.js";

const skillGroups = [
    {
        title: 'Full Stack Development',
        icon: 'fa-solid fa-code',
        text: 'MERN Stack, REST APIs, Authentication, WebSockets, Third-party API Integration',
    },
    {
        title: 'LMS & eCommerce',
        icon: 'fa-solid fa-cart-shopping',
        text: 'Moodle LMS, WooCommerce, Shopify, Custom Backend Integration, Order Synchronization, Payment Gateway Integration',
    },
    {
        title: 'Deployment & Tools',
        icon: 'fa-solid fa-server',
        text: 'Linux, GitHub, VPS Management, Vercel, Render, Postman',
    },
];

const Skills = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="skills" className="skills-section" ref={ref}>
            <div className="section-container">
                <div className="section-heading">
                    <h2 className="section-title text-warning">Technical Skills</h2>
                </div>
                <div className="skills-list">
                    {skillGroups.map((skill, index) => (
                        <div
                            key={skill.title}
                            className={`skill-item reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
                        >
                            <div className="skill-icon"><i className={skill.icon}></i></div>
                            <h3>{skill.title}</h3>
                            <p>{skill.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;
