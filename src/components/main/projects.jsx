import React, { useState, useEffect } from 'react';
import URL from "../../others/variables.js"
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/projects.css';
import useReveal from "../../others/useReveal.js";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [ref, visible] = useReveal();

    useEffect(() => {
        axios.get(`${URL}/projects`)
            .then(response => {
                setProjects(Array.isArray(response.data) ? response.data : []);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const projectsToShow = Array.isArray(projects) ? projects.slice(0, 4) : [];

    return (
        <section id="projects" className="projects-section" ref={ref}>
            <div className="section-container">
                <div className="section-heading">
                    <h2 className="section-title text-warning">Featured Projects</h2>
                </div>
                <div className="projects-list">
                    {projectsToShow.map((project, index) => (
                        <div
                            key={index}
                            className={`project-item reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
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
                                        <a
                                            href={project.gitHubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline"
                                        >
                                            <i className="fa-brands fa-github"></i> Repository
                                        </a>
                                    )}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-solid"
                                    >
                                        View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {projects.length > 4 && (
                    <div className="show-all-wrap">
                        <Link to="/all-projects" className="btn-outline">
                            Show All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
