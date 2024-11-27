import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#200000] text-white py-10">
      {/* Header Section */}
      <div className="container bg-red-950 py-4 mx-auto px-10 flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-lg text-gray-200 font-semibold">
          <p>Newsletter</p>
          <p className="text-xs">Be the first one to know about insights, technologies and innovations.</p>
        </div>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
          Subscribe
        </button>
      </div>

      <div className="flex justify-center">
        {/* Three Columns with 4 Rows */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-8 md:gap-16 lg:gap-44">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Support</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Developer Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Download</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 rounded-full p-2 bg-red-950 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 rounded-full p-2 bg-red-950 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 rounded-full p-2 bg-red-950 hover:text-white">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
