// src/components/Sidebar.jsx
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50">
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Zerodha</div>
        <button onClick={onClose} className="p-2">
          <AiOutlineClose size={24} />
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        <a href="#signup" className="hover:underline">Sign Up</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#products" className="hover:underline">Products</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#support" className="hover:underline">Support</a>
      </nav>
    </div>
  );
};

export default Sidebar;
