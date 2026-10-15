import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../lib/profile.json';
import experience from '../../lib/experience.json';
import { externalProps } from '../../others/links.js';
import Backdrop from './backdrop.jsx';
import '../../css/hero.css';

// The current role, if any, drives the live badge: "Assistant Programmer at
// Pedago Academy". Comes from experience.json, so it updates with the data.
const current = experience.find((job) => /present/i.test(job.period));
const badge = current ? `${current.role} at ${current.company.split(',')[0]}` : '';

// Split the headline around its accent phrase so the phrase can be drawn on.
const { text: headline, accent } = profile.headline;
const at = accent ? headline.indexOf(accent) : -1;
const before = at === -1 ? headline : headline.slice(0, at);
const after = at === -1 ? '' : headline.slice(at + accent.length);

// Entrance order: each step lands ~90ms after the previous one.
const step = (n) => ({ '--step': n });

const Hero = () => (
    <section id="top" className="hero">
        <Backdrop />

        <div className="container hero-grid">
            <div className="hero-content">
                {badge && (
                    <p className="hero-badge rise" style={step(0)}>
                        <span className="hero-badge-dot" aria-hidden="true"></span>
                        {badge}
                    </p>
                )}

                <h1 className="hero-title rise" style={step(1)}>{profile.name}</h1>

                <p className="hero-role rise" style={step(2)}>
                    {profile.role}
                    {profile.location && <span> · {profile.location}</span>}
                </p>

                <p className="hero-headline rise" style={step(3)}>
                    {before}
                    {at !== -1 && <span className="accent">{accent}</span>}
                    {after}
                </p>

                <p className="hero-lead rise" style={step(4)}>{profile.intro}</p>

                <ul className="hero-stack rise" style={step(5)} aria-label="Core stack">
                    {profile.techStack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div className="hero-actions rise" style={step(6)}>
                    <Link to="/contact" className="btn btn-primary">
                        Get in touch <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a className="btn btn-ghost" href={profile.cvLink} {...externalProps(profile.cvLink)}>
                        <i className="fa-solid fa-download"></i> Download CV
                    </a>
                </div>

                <div className="hero-socials rise" style={step(7)}>
                    {profile.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            className="social-btn"
                            aria-label={social.label}
                            {...externalProps(social.url)}
                        >
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
            </div>

            <div className="hero-visual">
                <div className="portrait focus-in">
                    <div className="portrait-frame">
                        <img src={profile.photo} alt={profile.name} className="portrait-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
