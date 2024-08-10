// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Zerodha from './components/Zerodha';
import Signup from './components/Signup'; // Import your SignupPage component
import Products from './components/Products';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Products />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Zerodha />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
