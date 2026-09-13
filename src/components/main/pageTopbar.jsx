import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './themeToggle.jsx';
import '../../css/navbar.css';

// Header for the standalone routes (/all-projects, /contact). Same shell as the
// home header, minus the in-page section links that only exist on the homepage.
const PageTopbar = ({ label = 'Back to portfolio' }) => (
    <header className="site-header is-scrolled is-page">
        <div className="container site-header-inner">
            <Link to="/" className="brand">
                <span className="brand-mark">&lt;/&gt;</span>
                <span className="brand-name">Rafi</span>
            </Link>

            <div className="header-actions">
                <ThemeToggle />

                <Link to="/" className="btn btn-ghost btn-sm">
                    <i className="fa-solid fa-arrow-left"></i> {label}
                </Link>
            </div>
        </div>
    </header>
);

export default PageTopbar;
