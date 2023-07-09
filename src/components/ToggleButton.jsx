import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{height: '100%', fontSize: '25px'}}
    >
      {isDarkMode ? '🌞' : '🌜'}
    </button>
  );
};

export default ToggleButton;
