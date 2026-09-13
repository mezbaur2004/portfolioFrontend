import React from "react";
import experiences from "../../lib/experience.json";
import "../../css/professional.css";
import useReveal from "../../others/useReveal";

const Professional = () => {
    const [ref, visible] = useReveal();

    return (
        <section
            id="experience"
            className="professional-section"
            ref={ref}
        >
            <div className="section-container">
                <div className="section-heading">
                    <h2 className="section-title text-warning">
                        Professional Experience
                    </h2>
                </div>

                <div className="experience-list-wrapper">

                    {experiences.map((experience) => (
                        <div
                            key={`${experience.role} ${experience.company}`}
                            className={`experience-card reveal ${visible ? "is-visible" : ""}`}
                        >
                            <div className="experience-header">
                                <div>
                                    <h3>{experience.role}</h3>
                                    <span>{experience.company}</span>
                                </div>

                                <div className="experience-date">
                                    {experience.period}
                                </div>
                            </div>

                            <p className="experience-description">
                                {experience.description}
                            </p>

                            <ul className="experience-list">
                                {experience.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Professional;
