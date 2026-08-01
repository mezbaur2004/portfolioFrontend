import React from "react";
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

                    <div className={`experience-card reveal ${visible ? "is-visible" : ""}`}>
                        <div className="experience-header">
                            <div>
                                <h3>Assistant Programmer</h3>
                                <span>Pedago Academy, Dhaka</span>
                            </div>

                            <div className="experience-date">
                                January 2026 – Present
                            </div>
                        </div>

                        <p className="experience-description">
                            Developing and maintaining production web applications, Learning Management Systems (LMS), and eCommerce platforms while supporting deployment, infrastructure, and business-critical integrations.
                        </p>

                        <ul className="experience-list">
                            <li>Contributed to the development, configuration, and ongoing improvement of Moodle LMS, including feature enhancements, reporting, plugin evaluation, and workflow optimization.</li>
                            <li>Developed and maintained NodeJs application and RESTful APIs to support business requirements and third-party integrations.</li>
                            <li>Developed and supported WordPress, WooCommerce, and Shopify solutions, including custom backend integrations and order synchronization.</li>
                            <li>Supported Linux VPS operations through deployment assistance, production troubleshooting, performance monitoring, backup procedures, and routine maintenance.</li>
                            <li>Integrated authentication systems, payment gateways, and third-party APIs based on project requirements.</li>
                        </ul>
                    </div>

                    <div className={`experience-card reveal ${visible ? "is-visible" : ""}`}>
                        <div className="experience-header">
                            <div>
                                <h3>Intern Software Engineer</h3>
                                <span>Solution Spin Ltd, Dhaka</span>
                            </div>

                            <div className="experience-date">
                                August 2025 – January 2026
                            </div>
                        </div>

                        <p className="experience-description">
                            Worked alongside senior developers to build and improve production-ready MERN applications while following modern software development practices and collaborative workflows.
                        </p>

                        <ul className="experience-list">
                            <li>Developed features using the MERN stack in collaboration with senior engineers.</li>
                            <li>Implemented React routing, Redux state management, and client-side validation.</li>
                            <li>Integrated REST APIs and improved frontend-backend communication.</li>
                            <li>Participated in code reviews, debugging, and feature implementation.</li>
                            <li>Contributed to improving application reliability, maintainability, and overall project structure.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Professional;
