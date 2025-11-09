import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaMoon, FaSun, FaBars } from 'react-icons/fa';
import './TopBar.css';

/**
 * TopBar Component
 * Modern top navigation bar with user menu and theme toggle
 */
const TopBar = ({ onMenuToggle, onThemeToggle, theme = 'light' }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button
          className="topbar__menu-toggle"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
        <div className="topbar__title">
          <h1 className="topbar__heading">Student Management</h1>
        </div>
      </div>

      <div className="topbar__right">
        <button
          className="topbar__theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        <div className="topbar__user-menu" ref={menuRef}>
          <button
            className="topbar__user-button"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            aria-expanded={userMenuOpen}
            aria-haspopup="true"
            aria-label="User menu"
          >
            <div className="topbar__user-avatar">
              <FaUser />
            </div>
            <span className="topbar__user-name">Admin</span>
          </button>

          {userMenuOpen && (
            <div className="topbar__user-dropdown">
              <div className="topbar__user-info">
                <div className="topbar__user-avatar topbar__user-avatar--large">
                  <FaUser />
                </div>
                <div>
                  <div className="topbar__user-name topbar__user-name--bold">Admin User</div>
                  <div className="topbar__user-email">admin@cbit.ac.in</div>
                </div>
              </div>
              <div className="topbar__user-divider" />
              <a href="#" className="topbar__user-item">
                <FaUser className="topbar__user-item-icon" />
                <span>Profile</span>
              </a>
              <a href="#" className="topbar__user-item">
                <FaCog className="topbar__user-item-icon" />
                <span>Settings</span>
              </a>
              <div className="topbar__user-divider" />
              <a href="#" className="topbar__user-item topbar__user-item--danger">
                <FaSignOutAlt className="topbar__user-item-icon" />
                <span>Sign Out</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;

