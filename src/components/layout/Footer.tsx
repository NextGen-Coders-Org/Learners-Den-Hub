
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-den-gray-dark text-white">
      <div className="den-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-den-purple to-den-purple-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg">LD</span>
              </div>
              <span className="font-bold text-xl">Learners Den</span>
            </Link>
            <p className="text-gray-300 mb-6">
              A vibrant community of learners, creators, and innovators building the future together.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-gray-300 hover:text-white transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/auth" className="text-gray-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:hello@learnersden.com" className="text-den-purple-light hover:text-white transition-colors">
                  hello@learnersden.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Social:</span>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Discord
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Learners Den. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
