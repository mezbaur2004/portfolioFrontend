import React from 'react';
import experiences from '../../lib/experience.json';
import SectionHeading from './sectionHeading.jsx';
import useReveal from '../../others/useReveal.js';
import '../../css/professional.css';

const Professional = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="container">
                <SectionHeading
                    eyebrow="Career"
                    title="Professional Experience"
                    sub="Roles where I build, maintain and support production systems."
                />

                <div className="timeline">
                    {experiences.map((experience, index) => (
                        <article
                            key={`${experience.role} ${experience.company}`}
                            className={`timeline-item reveal ${visible ? 'is-visible' : ''}`}
                            style={{ '--reveal-delay': `${index * 110}ms` }}
                        >
                            <span className="timeline-node" aria-hidden="true"></span>

                            <div className="card timeline-card">
                                <div className="timeline-head">
                                    <div>
                                        <h3 className="timeline-role">{experience.role}</h3>
                                        <p className="timeline-company">
                                            <i className="fa-solid fa-building"></i>
                                            {experience.company}
                                        </p>
                                    </div>
                                    <span className="timeline-period">{experience.period}</span>
                                </div>

                                <p className="timeline-summary">{experience.description}</p>

                                <ul className="timeline-list">
                                    {experience.highlights.map((highlight, position) => (
                                        <li key={position}>
                                            <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Professional;
