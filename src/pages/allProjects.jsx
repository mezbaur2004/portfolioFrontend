import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../lib/projects.json';
import PageTopbar from '../components/main/pageTopbar.jsx';
import ProjectCard from '../components/main/projectCard.jsx';
import SectionHeading from '../components/main/sectionHeading.jsx';
import Footer from '../components/main/footer.jsx';
import useReveal from '../others/useReveal.js';
import '../css/projects.css';
import '../css/allProjects.css';

const AllProjects = () => {
    const [ref, visible] = useReveal();

    return (
        <div className="page-shell">
            <PageTopbar />

            <main className="page-main" ref={ref}>
                <div className="container">
                    <SectionHeading
                        eyebrow={`${projects.length} projects`}
                        title="All Projects"
                        sub="Everything featured on the homepage, plus the rest of the work."
                    />

                    <div className="allprojects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                delay={(index % 2) * 90}
                                visible={visible}
                            />
                        ))}
                    </div>

                    <div className="allprojects-foot">
                        <Link to="/" className="btn btn-ghost">
                            <i className="fa-solid fa-arrow-left"></i> Back to portfolio
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AllProjects;
