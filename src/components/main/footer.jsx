import React from 'react';
import { Link } from "react-router-dom";
import '../../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} All rights reserved by Rafi
                    <Link to='/admin'><span className="admin-link">.</span></Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
