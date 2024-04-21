import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container">
                <span className='author-name'>© 2024 Tannous Geagea</span>
                <div className="social-icons">
                    <a href="https://github.com/tannousgeagea" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />  {/* FontAwesome GitHub icon */}
                    </a>
                    <a href="https://linkedin.com/in/tannousgeagea" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />  {/* FontAwesome LinkedIn icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;