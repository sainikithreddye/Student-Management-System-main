import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin,
  FaGithub,
  FaUniversity
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    {/* Institution Info */}
                    <div className="footer__section">
                        <h5 className="footer__section-title">
                            <FaUniversity className="footer__icon" />
                            Chaitanya Bharathi Institute of Technology
                        </h5>
                        <div className="footer__contact">
                            <p className="footer__contact-item">
                                <MdLocationOn className="footer__contact-icon" />
                                Gandipet, Hyderabad - 500075, Telangana
                            </p>
                            <p className="footer__contact-item">
                                <MdPhone className="footer__contact-icon" />
                                +91 40 2419 3256
                            </p>
                            <p className="footer__contact-item">
                                <MdEmail className="footer__contact-icon" />
                                info@cbit.ac.in
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__section">
                        <h5 className="footer__section-title">Quick Links</h5>
                        <ul className="footer__links">
                            <li>
                                <Link to="/" className="footer__link">Home</Link>
                            </li>
                            <li>
                                <Link to="/students" className="footer__link">Student List</Link>
                            </li>
                            <li>
                                <Link to="/add" className="footer__link">Add Student</Link>
                            </li>
                            <li>
                                <a 
                                    href="https://cbit.ac.in" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer__link"
                                >
                                    College Website
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="footer__section">
                        <h5 className="footer__section-title">Connect With Us</h5>
                        <div className="footer__social">
                            <a 
                                href="https://www.facebook.com" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a 
                                href="https://www.twitter.com" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a 
                                href="https://www.instagram.com" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <GrInstagram />
                            </a>
                            <a 
                                href="https://www.linkedin.com" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a 
                                href="https://www.github.com" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer__copyright">
                    <p className="footer__copyright-text">
                        &copy; {new Date().getFullYear()} Student Management System - CBIT. All Rights Reserved.
                    </p>
                    <p className="footer__copyright-text">
                        Developed by <a href="#" className="footer__copyright-link">CSE Department</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
