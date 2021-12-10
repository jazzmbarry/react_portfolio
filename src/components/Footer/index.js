import React from 'react';
import './index.css';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <a href="https://www.linkedin.com/in/matthew-barry-5b46a5112/" className="fa-icon" ><FaLinkedin /></a>
                <a href="https://github.com/jazzmbarry" className="fa-icon" ><FaGithub /></a>
            </div>
        </footer>
    );
}

/* <a href="#" className="fa-icon" ><FaFacebook /></a> */
