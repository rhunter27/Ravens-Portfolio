// components/Header/Navigation.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// Example in your Header component
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

export const Header = () => {
  return (
    <header className="header">
      {/* Your other header content */}
      <DarkModeToggle />
    </header>
  );
};

export default function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About Me
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
  );
}