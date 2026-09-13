import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../lib/profile.json';
import '../../css/hero.css';

// Opening line of the written summary, used as the hero's one-line positioning
// statement so the copy still lives in profile.json.
const lead = `${profile.summary[0].split('. ')[0].replace(/\.$/, '')}.`;

const Hero = () => (
    <section id="top" className="hero">
        <div className="container hero-grid">
            <div className="hero-content">
                <p className="hero-eyebrow">
                    <span className="hero-dot" aria-hidden="true"></span>
                    {profile.role}
                </p>

                <h1 className="hero-title">{profile.name}</h1>

                <p className="hero-lead">{lead}</p>

                <ul className="hero-stack">
                    {profile.techStack.map((tech) => (
                        <li key={tech} className="chip">{tech}</li>
                    ))}
                </ul>

                <div className="hero-actions">
                    <Link to="/contact" className="btn btn-primary">
                        Get in touch <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                        className="btn btn-ghost"
                        href={profile.cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-download"></i> Download CV
                    </a>
                </div>

                <div className="hero-socials">
                    {profile.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            className="social-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                        >
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
            </div>

            <div className="hero-visual">
                <div className="portrait">
                    <div className="portrait-frame">
                        <img src={profile.photo} alt={profile.name} className="portrait-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
