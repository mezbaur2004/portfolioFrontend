import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="text-center text-light">
    &copy; {new Date().getFullYear()} All rights reserved by Rafi
    <Link to='/admin'><span className="admin-link">.</span></Link>
</p>

            </div>
        </footer>
    );
};

export default Footer;
