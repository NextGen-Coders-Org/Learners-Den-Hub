
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-md fixed w-full z-10">
      <div className="den-container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-den-purple to-den-purple-dark flex items-center justify-center">
            <span className="text-white font-bold text-lg">LD</span>
          </div>
          <span className="font-bold text-xl hidden md:block">Learners Den</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors">
            Home
          </Link>
          <Link to="/events" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors">
            Events
          </Link>
          <Link to="/initiatives" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors">
            Initiatives
          </Link>
          <Link to="/team" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors">
            Team
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/auth" className="text-den-purple hover:text-den-purple-dark">
            Login
          </Link>
          <Link to="/auth">
            <Button variant="default" className="bg-den-purple hover:bg-den-purple-dark">
              Join Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border animate-fade-in">
          <div className="den-container py-4 flex flex-col space-y-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/events" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/initiatives" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={toggleMenu}>
              Initiatives
            </Link>
            <Link to="/team" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={toggleMenu}>
              Team
            </Link>
            <hr className="border-border" />
            <Link to="/auth" className="px-3 py-2 rounded-md hover:bg-secondary transition-colors" onClick={toggleMenu}>
              Login
            </Link>
            <Link to="/auth" onClick={toggleMenu}>
              <Button variant="default" className="w-full bg-den-purple hover:bg-den-purple-dark">
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
