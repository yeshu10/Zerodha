import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ThemeToggleButton from './ThemeToggleButton';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/Zerodhalogo.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();  // Access the current theme from context


  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className={`flex items-center justify-between p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="p-2 hidden md:flex">
          {sidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />} {/* Button to toggle sidebar */}
        </button>
        <div> <img src={logo} alt="Zerodha" className="w-8 h-8 "/></div>
        <div className="text-2xl font-bold">Zerodha</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#signup" className="hover:underline">Sign Up</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#support" className="hover:underline">Support</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="p-2 md:hidden">
          {sidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />} {/* Button to toggle sidebar */}
        </button>
        <ThemeToggleButton />
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};

export default Header;
