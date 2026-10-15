import React from 'react';
import { deriveTech } from '../../others/tech.js';
import { githubRepo } from '../../others/links.js';

const ProjectCard = ({ project, delay = 0, visible = true }) => {
    const tech = deriveTech(project);
    const hasLinks = Boolean(project.link || project.gitHubLink);
    const repo = githubRepo(project.gitHubLink) || githubRepo(project.link);

    return (
        <article
            className={`card project-card reveal ${visible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            <div className="project-media">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="project-img"
                        loading="lazy"
                    />
                ) : (
                    // Work with no interface to screenshot gets a blueprint
                    // tile: drafting grid, corner marks and the repository.
                    <div className="project-img blueprint" role="img" aria-label={`${project.title}, no screenshot`}>
                        <span className="blueprint-grid" aria-hidden="true"></span>
                        <span className="blueprint-corners" aria-hidden="true"></span>
                        <span className="blueprint-content">
                            <span className="blueprint-icon" aria-hidden="true">
                                <i className="fa-solid fa-code"></i>
                            </span>
                            {repo && <span className="blueprint-repo">{repo}</span>}
                        </span>
                    </div>
                )}
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

                {hasLinks && (
                    <div className="project-actions">
                        {project.link && (
                            <a
                                className="btn btn-primary btn-sm"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.linkLabel || 'Live site'} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        )}
                        {project.gitHubLink && (
                            <a
                                className="btn btn-ghost btn-sm"
                                href={project.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github"></i> {project.gitHubLabel || 'Source'}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
