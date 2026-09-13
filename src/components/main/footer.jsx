import React from 'react';
import '../../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} All rights reserved by Rafi
                    <span className="admin-link">.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
