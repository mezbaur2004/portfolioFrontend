import React from 'react';
import skillGroups from '../../lib/skills.json';
import '../../css/skills.css'
import useReveal from "../../others/useReveal.js";

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
