import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../lib/profile.json';
import Backdrop from './backdrop.jsx';
import { externalProps, readableUrl } from '../../others/links.js';
import SectionHeading from './sectionHeading.jsx';
import useReveal from '../../others/useReveal.js';
import '../../css/contact.css';

const Contact = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <Backdrop variant="is-contact" />
            <div className="container">
                <div className={`contact-card reveal ${visible ? 'is-visible' : ''}`}>
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
                                {...externalProps(social.url)}
                            >
                                <span className="contact-link-icon">
                                    <i className={social.icon}></i>
                                </span>
                                <span className="contact-link-text">
                                    <span className="contact-link-label">{social.label}</span>
                                    <span className="contact-link-url">{social.display || readableUrl(social.url)}</span>
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
