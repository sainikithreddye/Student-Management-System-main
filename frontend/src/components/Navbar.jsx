import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUniversity, FaHome, FaUserGraduate, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();

    // Check if current route matches
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                {/* Logo Section with perfect alignment */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <div className="d-flex align-items-center">
                        <FaUniversity className="fs-2 me-2" style={{ minWidth: '28px' }} />
                        <div>
                            <span className="d-block fw-bold fs-5 lh-1">CBIT</span>
                            <span className="d-block small lh-1">Student Portal</span>
                        </div>
                    </div>
                </Link>

                {/* Mobile Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <Link 
                                className={`nav-link d-flex align-items-center ${isActive('/') ? 'active fw-bold' : ''}`}
                                to="/"
                            >
                                <FaHome className="me-1" />
                                Home
                                {isActive('/') && <span className="visually-hidden">(current)</span>}
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link 
                                className={`nav-link d-flex align-items-center ${isActive('/students') ? 'active fw-bold' : ''}`}
                                to="/students"
                            >
                                <FaUserGraduate className="me-1" />
                                Students
                                {isActive('/students') && <span className="visually-hidden">(current)</span>}
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link 
                                className={`nav-link d-flex align-items-center ${isActive('/add') ? 'active fw-bold' : ''}`}
                                to="/add"
                            >
                                <FaUserPlus className="me-1" />
                                Registration
                                {isActive('/add') && <span className="visually-hidden">(current)</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;