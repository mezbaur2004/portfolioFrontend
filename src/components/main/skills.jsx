import React from 'react';
import '../../css/skills.css'
import useReveal from "../../others/useReveal.js";

const skillGroups = [
    {
        title: 'Backend & Databases',
        icon: 'fa-solid fa-server',
        text: 'Node.js, Express.js, MongoDB (Mongoose), PostgreSQL, REST APIs, Third-party API Integration',
    },
    {
        title: 'Frontend',
        icon: 'fa-solid fa-code',
        text: 'React.js, Next.js, Tailwind CSS, Redux Toolkit, Bootstrap, Formik, Yup',
    },
    {
        title: 'Tools & Deployment',
        icon: 'fa-solid fa-screwdriver-wrench',
        text: 'GitHub, Postman, Render, Vercel',
    },
];

const Skills = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="skills" className="skills-section" ref={ref}>
            <div className="section-container">
                <div className="section-heading">
                    <h2 className="section-title text-warning">My Skills</h2>
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
