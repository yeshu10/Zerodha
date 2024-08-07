import React from 'react';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();  // Access theme and toggle function from context

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'light' ? <AiOutlineSun size={24} /> : <AiOutlineMoon size={24} />}
    </button>
  );
};

export default ThemeToggleButton;
