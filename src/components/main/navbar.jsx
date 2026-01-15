import React, { useState } from 'react';
import '../../css/navbar.css'; // Add your custom styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">{`<Rafi/>`}</div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="dropdown" onClick={toggleDropdown}>
                &#9776; {/* Hamburger icon */}
            </div>
        </nav>
    );
};

export default Navbar;
