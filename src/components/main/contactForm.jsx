import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import profile from '../../lib/profile.json';
import SectionHeading from './sectionHeading.jsx';
import '../../css/contact-form.css';

const emptyForm = { name: '', email: '', message: '' };

const ContactForm = () => {
    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState('idle');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('sending');

        const combinedMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
        `;

        emailjs
            .send(
                'service_3frv55p',
                'template_zdrp7ii',
                { name: formData.name, email: formData.email, message: combinedMessage },
                'm2FbwP8KXotwIWMDa',
            )
            .then(() => {
                setFormData(emptyForm);
                setStatus('sent');
            })
            .catch(() => setStatus('error'));
    };

    return (
        <div className="container contact-form-wrap">
            <div className="contact-form-grid">
                <div className="contact-form-aside">
                    <SectionHeading
                        eyebrow="Contact"
                        title="Send a message"
                        sub="Fill in the form and it lands straight in my inbox."
                    />

                    <div className="contact-form-socials">
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

                <div className="card contact-form-card">
                    {status === 'sent' ? (
                        <div className="form-success">
                            <span className="form-success-icon">
                                <i className="fa-solid fa-check"></i>
                            </span>
                            <h3>Message sent</h3>
                            <p>Thanks for reaching out — I&apos;ll get back to you as soon as I can.</p>
                            <div className="form-success-actions">
                                <Link to="/" className="btn btn-primary">
                                    Back to portfolio
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={() => setStatus('idle')}
                                >
                                    Send another
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form" noValidate={false}>
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="What would you like to talk about?"
                                    required
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <p className="form-error">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    Something went wrong sending that. Please try again, or reach me on LinkedIn.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary form-submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending…' : 'Send message'}
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
