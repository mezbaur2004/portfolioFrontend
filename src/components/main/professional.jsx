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

                <ol className="timeline">
                    {experiences.map((experience, index) => (
                        <li
                            key={`${experience.role} ${experience.company}`}
                            className={`timeline-item reveal ${visible ? 'is-visible' : ''}`}
                            style={{ '--reveal-delay': `${index * 100}ms` }}
                        >
                            <p className="timeline-period">{experience.period}</p>

                            <div className="timeline-body">
                                <h3 className="timeline-role">{experience.role}</h3>
                                <p className="timeline-company">{experience.company}</p>
                                <p className="timeline-summary">{experience.description}</p>

                                <ul className="timeline-list">
                                    {experience.highlights.map((highlight, position) => (
                                        <li key={position}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Professional;
