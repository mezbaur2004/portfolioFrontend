import React from 'react';
import '../../css/skills.css'

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title text-warning">My Skills</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <h3>Databases & Backend</h3>
                        <p>MongoDB (Mongoose), PostgreSQL, NodeJS, ExpressJS, Third-Party API Integration</p>
                    </div>
                    <div className="skill-item">
                        <h3>Frontend</h3>
                        <p>ReactJS, Redux Toolkit, HTML, CSS, Bootstrap, Formik, Yup</p>
                    </div>
                    <div className="skill-item">
                        <h3>Version Control & Tools</h3>
                        <p>GitHub, Postman, Render, Vercel</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
