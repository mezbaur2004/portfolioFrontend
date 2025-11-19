import React from 'react';
import '../../css/skills.css'

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title text-warning">My Skills</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <h3>Backend & Databases</h3>
                        <p>Node.js, Express.js, MongoDB (Mongoose), PostgreSQL, REST APIs, Third-party API Integration</p>
                    </div>
                    <div className="skill-item">
                        <h3>Frontend</h3>
                        <p>React.js, Next.js, Tailwind CSS, Redux Toolkit, Bootstrap, Formik, Yup</p>
                    </div>
                    <div className="skill-item">
                        <h3>Tools & Deployment</h3>
                        <p>GitHub, Postman, Render, Vercel</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills;