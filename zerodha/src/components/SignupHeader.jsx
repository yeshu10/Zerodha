import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for theme toggle

const SignupHeader = () => {
  const { theme, toggleTheme } = useTheme(); // Access the current theme and toggle function

  // Define colors based on the theme
  const headerBgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const buttonBgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
  const buttonHoverColor = theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-300';
  const iconColor = theme === 'dark' ? 'text-yellow-500' : 'text-gray-800';

  return (
    <header className={`flex justify-between items-center p-4 shadow-md ${headerBgColor}`}>
      {/* Logo */}
      <div className={`text-2xl font-bold ${textColor}`}>
        Zerodha
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${buttonBgColor} ${buttonHoverColor}`}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <FaSun className={`text-yellow-500 ${iconColor}`} />
        ) : (
          <FaMoon className={`text-gray-800 ${iconColor}`} />
        )}
      </button>
    </header>
  );
};

export default SignupHeader;
