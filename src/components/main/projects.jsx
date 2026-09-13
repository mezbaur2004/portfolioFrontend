import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../lib/projects.json';
import ProjectCard from './projectCard.jsx';
import SectionHeading from './sectionHeading.jsx';
import useReveal from '../../others/useReveal.js';
import '../../css/projects.css';

const Projects = () => {
    const [ref, visible] = useReveal();

    const featured = projects.slice(0, 4);

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <SectionHeading
                    eyebrow="Work"
                    title="Featured Projects"
                    sub="Applications and platforms I have built, integrated and deployed."
                />

                <div className="projects-grid">
                    {featured.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            delay={(index % 2) * 80}
                            visible={visible}
                        />
                    ))}
                </div>

                {projects.length > 4 && (
                    <div className="projects-more">
                        <Link to="/all-projects" className="btn btn-ghost">
                            View all {projects.length} projects <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
