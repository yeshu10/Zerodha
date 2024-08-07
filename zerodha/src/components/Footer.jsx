import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';  // Import the useTheme hook

const Footer = () => {
  const { theme } = useTheme();  // Access the current theme from context

  return (
    <footer className={`py-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Copyright */}
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold mb-4">Zerodha</div>
            <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Company Links */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Company</h4>
            <a href="#about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#referral" className="hover:underline">Referral programme</a>
            <a href="#careers" className="hover:underline">Careers</a>
            <a href="#zerodha-tech" className="hover:underline">Zerodha.tech</a>
            <a href="#press" className="hover:underline">Press & media</a>
            <a href="#csr" className="hover:underline">Zerodha Cares (CSR)</a>
          </div>
          
          {/* Column 3: Support Links */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Support</h4>
            <a href="#contact-us" className="hover:underline">Contact us</a>
            <a href="#support-portal" className="hover:underline">Support portal</a>
            <a href="#z-connect" className="hover:underline">Z-Connect blog</a>
            <a href="#charges" className="hover:underline">List of charges</a>
            <a href="#downloads" className="hover:underline">Downloads & resources</a>
            <a href="#videos" className="hover:underline">Videos</a>
            <a href="#market-overview" className="hover:underline">Market overview</a>
            <a href="#file-complaint" className="hover:underline">How to file a complaint?</a>
            <a href="#status-complaints" className="hover:underline">Status of your complaints</a>
          </div>
          
          {/* Column 4: Account Links */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Account</h4>
            <a href="#open-account" className="hover:underline">Open an account</a>
            <a href="#fund-transfer" className="hover:underline">Fund transfer</a>
          </div>
        </div>
        
        {/* Legal & Contact Information */}
        <div className="mt-8 border-t pt-4 text-[10px] ">
          <h4 className="font-bold mb-2">Legal & Contact Information</h4>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238</p>
          <p>Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.</p>
          <p>For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="hover:underline">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="hover:underline">dp@zerodha.com</a>.</p>
          <p>Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."</p>
          <p>Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket <a href="#" className="hover:underline">here</a>.</p>
          <p className="flex space-x-8 text-[10] justify-center">
  <span>NSE</span>
  <span>BSE</span>
  <span>MCX</span>
  <span>Terms & conditions</span>
  <span>Policies & procedures</span>
  <span>Privacy policy</span>
  <span>Disclosure</span>
  <span>For investor's attention</span>
  <span>Investor charter</span>
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
