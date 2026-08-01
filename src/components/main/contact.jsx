import React from 'react';
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
                    <a href="https://facebook.com/mezbaur2004" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://linkedin.com/in/mezbaur2004" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mezbaur2004" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
