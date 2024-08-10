import React from 'react';
import kiteImage from '../assets/products-kite.png'; // Replace with actual image paths
import consoleImage from '../assets/products-console.png';
import coinImage from '../assets/products-coin.png';
import kiteConnectImage from '../assets/products-kiteconnect.png';
import varsityMobileImage from '../assets/varsity-products.png';
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook

const Products = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div className={`p-6 md:p-12 lg:p-16 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Top Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Technology</h1>
        <p className="text-lg mb-6">
          Sleek, modern, and intuitive trading platforms
        </p>
        <a href="#investment-offerings" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Check out our investment offerings
        </a>
      </div>

      {/* Existing Product Divs */}
      <div className="space-y-16">
        {/* Div 1 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-reverse md:space-x-16 mx-auto max-w-6xl">
          <div className="flex-1 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">Kite</h2>
            <p className="mb-6">
              Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
            </p>
            <a href="#demo" className="text-blue-500 hover:underline">Try demo</a> | 
            <a href="#learn-more" className="text-blue-500 hover:underline">Learn more</a>
          </div>
          <div className="flex-1">
            <img src={kiteImage} alt="Kite" className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Div 2 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16 mx-auto max-w-6xl">
          <div className="flex-1 md:pr-12">
            <h2 className="text-2xl font-bold mb-4">Console</h2>
            <p className="mb-6">
              The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
            </p>
            <a href="#learn-more" className="text-blue-500 hover:underline">Learn more</a>
          </div>
          <div className="flex-1">
            <img src={consoleImage} alt="Console" className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Div 3 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-reverse md:space-x-16 mx-auto max-w-6xl">
          <div className="flex-1 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">Coin</h2>
            <p className="mb-6">
              Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
            </p>
            <a href="#coin" className="text-blue-500 hover:underline">Coin</a>
          </div>
          <div className="flex-1">
            <img src={coinImage} alt="Coin" className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Div 4 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16 mx-auto max-w-6xl">
          <div className="flex-1 md:pr-12">
            <h2 className="text-2xl font-bold mb-4">Kite Connect API</h2>
            <p className="mb-6">
              Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
            </p>
            <a href="#kite-connect" className="text-blue-500 hover:underline">Kite Connect</a>
          </div>
          <div className="flex-1">
            <img src={kiteConnectImage} alt="Kite Connect API" className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Div 5 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-reverse md:space-x-16 mx-auto max-w-6xl">
          <div className="flex-1 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">Varsity Mobile</h2>
            <p className="mb-6">
              An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
            </p>
          </div>
          <div className="flex-1">
            <img src={varsityMobileImage} alt="Varsity Mobile" className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <p className="text-lg mb-6">
          Want to know more about our technology stack? Check out the Zerodha.tech blog.
        </p>
        <h1 className="text-3xl font-bold mb-4">The Zerodha Universe</h1>
        <p className="mb-6">
          Extend your trading and investment experience even further with our partner platforms.
        </p>
        <a href="#signup" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Products;
