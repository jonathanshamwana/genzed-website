import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} GenZed. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
