import React, { useState, useEffect } from 'react';
import URL from "../others/variables.js"
import axios from 'axios';
import '../css/projects.css';
import '../css/allProjects.css';
import Footer from "../components/main/footer.jsx";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import useReveal from "../others/useReveal.js";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [gridRef, gridVisible] = useReveal();

    useEffect(() => {
        axios.get(`${URL}/projects`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <div className="all-projects-page">
            <header className="full-topbar">
                <div className="section-container full-topbar-inner">
                    <span className="full-topbar-brand">{`<Rafi/>`}</span>
                    <Link to="/" className="btn-outline">
                        Go to Homepage
                    </Link>
                </div>
            </header>

            <section id="full-display-projects" className="projects-full-section" ref={gridRef}>
                <div className="section-container">
                    <div className="section-heading">
                        <h2 className="section-title text-warning">All Projects</h2>
                    </div>

                    {/* CSS Grid for the projects layout */}
                    <div className="full-projects-grid">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`project-item reveal reveal-delay-${(index % 3) + 1} ${gridVisible ? 'is-visible' : ''}`}
                            >
                                <div className="project-image-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                </div>
                                <div className="project-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-actions">
                                        {project.gitHubLink && (
                                            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer"
                                               className="btn-outline">
                                                <i className="fa-brands fa-github"></i> Repository
                                            </a>
                                        )}
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                           className="btn-solid">
                                            View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* "Go to Homepage" Button */}
                <div className="show-all-wrap">
                    <Link to="/" className="btn-outline">
                        Go to Homepage
                    </Link>
                </div>

            </section>

            <Footer/>
        </div>
    );
};

export default AllProjects;
