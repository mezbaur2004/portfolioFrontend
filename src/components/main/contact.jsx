import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../lib/profile.json';
import SectionHeading from './sectionHeading.jsx';
import useReveal from '../../others/useReveal.js';
import '../../css/contact.css';

const readableUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const Contact = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className="container">
                <div className={`card contact-card reveal ${visible ? 'is-visible' : ''}`}>
                    <div className="contact-intro">
                        <SectionHeading
                            eyebrow="Contact"
                            title="Get in Touch"
                            sub="Send a message through the form, or reach me on any of these."
                        />
                        <Link to="/contact" className="btn btn-primary">
                            Send a message <i className="fa-solid fa-paper-plane"></i>
                        </Link>
                    </div>

                    <div className="contact-links">
                        {profile.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="contact-link-icon">
                                    <i className={social.icon}></i>
                                </span>
                                <span className="contact-link-text">
                                    <span className="contact-link-label">{social.label}</span>
                                    <span className="contact-link-url">{readableUrl(social.url)}</span>
                                </span>
                                <i className="fa-solid fa-arrow-up-right-from-square contact-link-go"></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
