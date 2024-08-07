// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Footer/>
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;
