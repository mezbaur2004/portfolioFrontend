import React, { useEffect, useState } from 'react';
import profile from '../../lib/profile.json';
import ThemeToggle from './themeToggle.jsx';
import useActiveSection from '../../others/useActiveSection.js';
import '../../css/navbar.css';

const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const sectionIds = links.map((link) => link.id);

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useActiveSection(sectionIds);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
            <div className="container site-header-inner">
                <a href="#top" className="brand" onClick={() => setOpen(false)}>
                    <span className="brand-mark">&lt;/&gt;</span>
                    <span className="brand-name">Rafi</span>
                </a>

                <nav className="nav-desktop" aria-label="Sections">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`nav-link ${active === link.id ? 'is-active' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="header-actions">
                    <ThemeToggle />

                    <a
                        className="btn btn-primary btn-sm header-cv"
                        href={profile.cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-download"></i> Resume
                    </a>

                    <button
                        type="button"
                        className="nav-toggle"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((value) => !value)}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <div className="nav-mobile" id="mobile-nav" hidden={!open}>
                <div className="container nav-mobile-inner">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`nav-mobile-link ${active === link.id ? 'is-active' : ''}`}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    ))}
                    <a
                        className="btn btn-primary nav-mobile-cv"
                        href={profile.cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        <i className="fa-solid fa-download"></i> Download Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
