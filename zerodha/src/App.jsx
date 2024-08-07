// src/App.jsx
import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;
