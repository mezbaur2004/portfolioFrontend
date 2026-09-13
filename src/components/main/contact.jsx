import React from 'react';
import profile from "../../lib/profile.json";
import '../../css/contact.css'
import useReveal from "../../others/useReveal.js";

const Contact = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div className={`section-container reveal ${visible ? 'is-visible' : ''}`}>
                <div className="section-heading">
                    <h2 className="section-title text-warning">Get in Touch</h2>
                </div>
                <div className="social-links">
                    {profile.socials.map((social) => (
                        <a key={social.label} href={social.url} className="text-light" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
