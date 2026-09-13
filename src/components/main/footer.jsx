import React from 'react';
import profile from '../../lib/profile.json';
import '../../css/footer.css';

const Footer = () => (
    <footer className="site-footer">
        <div className="container footer-inner">
            <div className="footer-identity">
                <span className="brand-mark">&lt;/&gt;</span>
                <div>
                    <p className="footer-name">{profile.name}</p>
                    <p className="footer-role">{profile.role}</p>
                </div>
            </div>

            <div className="footer-socials">
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

            <p className="footer-copy">
                &copy; {new Date().getFullYear()} {profile.name}
            </p>
        </div>
    </footer>
);

export default Footer;
