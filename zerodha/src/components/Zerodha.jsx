// src/components/Zerodha.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Zerodhalanding from '../assets/Zerodhalanding.png'; // Replace with your image path
import ecosystem from '../assets/ecosystem.png'; // Replace with your image path
import presslogos from '../assets/press-logos.png';
import opening from '../assets/opening.svg';
import equity from '../assets/equity.svg';
import intraday from '../assets/intraday.svg';

const Zerodha = () => {
  const { theme } = useTheme(); // Access the current theme from context

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        {/* Image in center */}
        <div className="flex justify-center mb-12">
          <img
            src={Zerodhalanding}
            alt="Zerodha"
            className="w-full max-w-lg h-auto object-cover" // Keep the same size
          />
        </div>

        {/* Invest in everything and description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Invest in everything</h2>
          <p className="text-lg">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
        </div>

        {/* Content section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Text Content */}
          <div className="flex-1 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Trust with confidence</h2>
            <p className="text-lg mb-6">Customer-first always</p>
            <p className="text-base mb-4">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
            </p>
            <p className="text-lg mb-6">No spam or gimmicks</p>
            <p className="text-base mb-4">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
            </p>
            <p className="text-lg mb-6">The Zerodha universe</p>
            <p className="text-base mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
            </p>
            <p className="text-lg mb-6">Do better with money</p>
            <p className="text-base">
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1">
            <img
              src={ecosystem}
              alt="Investment"
              className="w-full h-auto object-cover max-w-md mx-auto" // Keep the same size
            />
          </div>
        </div>

        {/* Press logos section */}
        <div className="relative w-full h-20 flex items-center justify-center overflow-hidden my-12">
          <img
            src={presslogos}
            alt="Centered"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4">
  {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> */}
  <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
    {/* First Column */}
    {/* <div className="flex flex-col items-center text-center md:text-left md:col-span-2"> */}
    <div className="flex-1 md:pr-8">
      <h2 className="text-2xl font-bold mb-4">Unbeatable Pricing</h2>
      <p className="text-lg text-gray-700 mb-4">
        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
      </p>
    </div>
    <div className="flex justify-between">
  {/* Second Column */}
  <div className="flex items-center text-center md:text-left">
    <img
      src={opening}
      alt="Opening"
      className="w-20 h-auto object-contain mb-4"
    />
  </div>

  {/* Third Column */}
  <div className="flex items-center text-center md:text-left">
    <img
      src={equity}
      alt="Equity"
      className="w-20 h-auto object-contain mb-4"
    />
  </div>

  {/* Fourth Column */}
  <div className="flex items-center text-center md:text-left">
    <img
      src={intraday}
      alt="Intraday"
      className="w-20 h-auto object-contain mb-4"
    />
  </div>
</div>

  </div>
</div>





      </div>
    </section>
  );
};

export default Zerodha;
