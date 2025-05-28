// src/components/Header/Header.jsx
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">YourName</h1>
        
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};