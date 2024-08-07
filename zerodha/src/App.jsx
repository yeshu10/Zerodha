// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Zerodha from './components/Zerodha';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Zerodha/>
      <Footer/>
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;
