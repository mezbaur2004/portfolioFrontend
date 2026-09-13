import React from 'react';
import { deriveTech } from '../../others/tech.js';

const ProjectCard = ({ project, delay = 0, visible = true }) => {
    const tech = deriveTech(project);

    return (
        <article
            className={`card project-card reveal ${visible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            <div className="project-media">
                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-img"
                    loading="lazy"
                />
            </div>

            <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {tech.length > 0 && (
                    <ul className="project-tech chip-row">
                        {tech.map((item) => (
                            <li key={item} className="chip">{item}</li>
                        ))}
                    </ul>
                )}

                <div className="project-actions">
                    {project.link && (
                        <a
                            className="btn btn-primary btn-sm"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live site <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    )}
                    {project.gitHubLink && (
                        <a
                            className="btn btn-ghost btn-sm"
                            href={project.gitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i> Source
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
