import React from 'react';
import skillGroups from '../../lib/skills.json';
import SectionHeading from './sectionHeading.jsx';
import useReveal from '../../others/useReveal.js';
import '../../css/skills.css';

// Each group stores its items as one comma-separated string in skills.json;
// split for display only, so the data file stays the source of truth.
const toItems = (text) => text.split(',').map((item) => item.trim()).filter(Boolean);

const Skills = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="skills" className="section skills-section" ref={ref}>
            <div className="container">
                <SectionHeading
                    eyebrow="Capabilities"
                    title="Technical Skills"
                    sub="Languages, frameworks and platforms I work with day to day."
                />

                <div className="skills-grid">
                    {skillGroups.map((group, index) => (
                        <article
                            key={group.title}
                            className={`card skill-card reveal ${visible ? 'is-visible' : ''}`}
                            style={{ '--reveal-delay': `${index * 90}ms` }}
                        >
                            <div className="skill-icon">
                                <i className={group.icon}></i>
                            </div>
                            <h3 className="skill-title">{group.title}</h3>
                            <ul className="skill-items chip-row">
                                {toItems(group.text).map((item) => (
                                    <li key={item} className="chip chip-neutral">{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
