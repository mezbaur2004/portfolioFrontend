import React from 'react';
import '../../css/skills.css'

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title text-warning">My Skills</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <h3>Database Management</h3>
                        <p>MongoDB (Mongoose), PostgreSQL</p>
                    </div>
                    <div className="skill-item">
                        <h3>Back-End Development</h3>
                        <p>NodeJS, ExpressJS, Third-Party API Integration</p>
                    </div>
                    <div className="skill-item">
                        <h3>Front-End Development</h3>
                        <p>HTML, CSS, ReactJS, Redux Toolkit, Bootstrap, Formik, Yup</p>
                    </div>
                    <div className="skill-item">
                        <h3>Version Control</h3>
                        <p>Git, GitHub</p>
                    </div>
                    <div className="skill-item">
                        <h3>Tools & Deployment</h3>
                        <p>Postman, Render, Vercel</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
