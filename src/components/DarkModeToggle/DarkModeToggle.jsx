// src/components/DarkModeToggle/DarkModeToggle.tsx
import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="dark-mode-toggle"
    >
      {darkMode ? (
        <FiSun className="text-yellow-300" size={20} />
      ) : (
        <FiMoon className="text-indigo-700" size={20} />
      )}
    </button>
  );
};