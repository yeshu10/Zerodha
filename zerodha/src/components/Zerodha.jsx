import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Zerodhalanding from '../assets/Zerodhalanding.png'; // Replace with your image path
import ecosystem from '../assets/ecosystem.png'; // Replace with your image path
import presslogos from '../assets/press-logos.png';
import opening from '../assets/opening.svg';
import equity from '../assets/equity.svg';
import intraday from '../assets/intraday.svg';
import Varsity from '../assets/Varsity.svg';

const Zerodha = () => {
  const { theme } = useTheme(); // Access the current theme from context

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} overflow-x-hidden`}>
      <div className="container mx-auto px-4">
        {/* Image in center */}
        <div className="flex justify-center mb-12">
          <img
            src={Zerodhalanding}
            alt="Zerodha"
            className="w-full max-w-lg h-auto object-cover"
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
        <div className={`flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
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
              className="w-full h-auto object-cover max-w-full mx-auto"
            />
          </div>
        </div>

        {/* Press logos section */}
        <div className="relative w-full h-20 flex items-center justify-center overflow-hidden my-12">
          <img
            src={presslogos}
            alt="Centered"
            className={`w-full h-auto object-contain ${theme === 'dark' ? 'filter brightness-75' : ''}`} // Optional filter for dark theme
          />
        </div>

        {/* Pricing Section */}
        <div className={`flex items-center justify-center py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <div className="container mx-auto flex flex-col md:flex-row items-center space-x-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Unbeatable Pricing</h2>
              <p className="text-lg mb-4">
                We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
              </p>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <div className="flex items-center space-x-8"> {/* Adjusted space between items */}
                {/* Second Column */}
                <div className="flex items-center justify-center">
                  <img
                    src={opening}
                    alt="Opening"
                    className="w-16 h-auto object-contain" // Adjusted size
                  />
                </div>

                {/* Third Column */}
                <div className="flex items-center justify-center">
                  <img
                    src={equity}
                    alt="Equity"
                    className="w-16 h-auto object-contain" // Adjusted size
                  />
                </div>

                {/* Fourth Column */}
                <div className="flex items-center justify-center">
                  <img
                    src={intraday}
                    alt="Intraday"
                    className="w-16 h-auto object-contain" // Adjusted size
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education and Community Section */}
        <div className={`flex items-center justify-center py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <div className="container mx-auto flex flex-col md:flex-row items-center space-x-8">
            {/* Left Side: Image */}
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <img
                src={Varsity}
                alt="Education"
                className="w-full max-w-md h-auto object-cover"
              />
            </div>
            
            {/* Right Side: Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Free and Open Market Education</h2>
              <p className="text-lg mb-4">
                Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
              </p>
              <h3 className="text-xl font-semibold mb-2">Varsity</h3>
              <p className="text-lg mb-4">
                TradingQ&A, the most active trading and investment community in India for all your market-related queries.
              </p>
              <h3 className="text-xl font-semibold mt-4">TradingQ&A</h3>
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <div className="container mx-auto">
            {/* Heading and Description */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Open a Zerodha Account</h2>
              <p className="text-lg mb-6">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
              </p>
            </div>

            {/* Sign Up Button */}
            <div>
              <a
                href="#"
                className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300 w-full md:w-auto"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Zerodha;
