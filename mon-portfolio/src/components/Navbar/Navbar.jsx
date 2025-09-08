import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">Portfolio.</div>

            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li><a href="#hero">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div
                className={`hamburger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};
