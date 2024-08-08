import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import SignupHeader from '../components/SignupHeader';
import signup from '../assets/signup.png';
import { useTheme } from '../context/ThemeContext'; // Ensure correct import

const Signup = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const { theme } = useTheme(); // Use theme from context

  // Define text color based on theme
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={`flex flex-col min-h-screen ${bgColor}`}>
      <SignupHeader />

      <div className="flex flex-col md:flex-row justify-center items-center flex-grow p-4 md:p-8 space-y-10 md:space-y-0 md:space-x-10 mx-4 md:mx-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={signup}
            alt="Signup"
            className="w-full h-auto md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:max-w-lg mx-auto">
          <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>Sign Up or Track Your Application</h1>
          <p className={`mb-4 ${textColor}`}>Mobile number</p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <span className={`text-gray-600 text-lg mr-2 ${textColor}`}>+91</span>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                required
              />
            </div>
            <p className={`text-gray-600 mb-4 ${textColor}`}>You will receive an OTP on your number</p>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
              Continue <FaArrowRight className="ml-2" />
            </button>
          </form>
          <p className={`mt-4 text-gray-600 ${textColor}`}>
            Want to open an NRI account? <a href="#nri" className="text-blue-500 hover:underline">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
