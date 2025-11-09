import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUserGraduate, 
  FaUserPlus, 
  FaUniversity,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import './Sidebar.css';

/**
 * Sidebar Navigation Component
 * Modern sidebar with collapsible functionality
 */
const Sidebar = ({ collapsed, onToggle, mobileOpen, onMobileClose }) => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      label: 'Home',
      icon: FaHome,
    },
    {
      path: '/students',
      label: 'Students',
      icon: FaUserGraduate,
    },
    {
      path: '/add',
      label: 'Add Student',
      icon: FaUserPlus,
    },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {mobileOpen && (
        <div 
          className="sidebar__overlay"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}
      <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${mobileOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <Link to="/" className="sidebar__logo">
          <div className="sidebar__logo-icon">
            <FaUniversity />
          </div>
          {!collapsed && (
            <div className="sidebar__logo-text">
              <span className="sidebar__logo-title">CBIT</span>
              <span className="sidebar__logo-subtitle">Student Portal</span>
            </div>
          )}
        </Link>
        <button
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <nav className="sidebar__nav" aria-label="Main navigation">
        <ul className="sidebar__menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.path} className="sidebar__menu-item">
                <Link
                  to={item.path}
                  className={`sidebar__menu-link ${active ? 'sidebar__menu-link--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="sidebar__menu-icon">
                    <Icon />
                  </span>
                  {!collapsed && (
                    <span className="sidebar__menu-label">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;

