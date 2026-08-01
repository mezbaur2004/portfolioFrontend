import React, { useState } from 'react';
import '../../css/navbar.css'; // Add your custom styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">{`<Rafi/>`}</div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#about" onClick={closeDropdown}>About</a>
                <a href="#skills" onClick={closeDropdown}>Skills</a>
                <a href="#projects" onClick={closeDropdown}>Projects</a>
                <a href="#contact" onClick={closeDropdown}>Contact</a>
            </div>
            <div className="dropdown" onClick={toggleDropdown} aria-label="Toggle navigation">
                &#9776; {/* Hamburger icon */}
            </div>
        </nav>
    );
};

export default Navbar;
