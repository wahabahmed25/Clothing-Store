import { Link } from "react-router-dom";
// import { useState } from "react";
import CloseIcon from './icons/close.svg';

import PropTypes from "prop-types";

const Navbar = ({ navOpen, setNavOpen }) => {
  // Handle navbar toggle
  const handleToggleNavbar = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Side Navbar */}
      <div
        className={`fixed top-0 left-0 h-full w-1/4 bg-gray-800 text-white p-4 transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Close Icon */}
        {navOpen && (
          <img
            src={CloseIcon}
            alt="Close Icon"
            className="w-8 h-5 cursor-pointer top-2 left-2 absolute"
            style={{ filter: "invert(1)" }}
            onClick={handleToggleNavbar}
          />
        )}

        {/* Navbar links */}
        {navOpen && (
          <nav className="py-6">
            <Link
              to="/"
              className="block mb-4 text-center text-xl p-4 rounded-lg bg-gray-800 text-white hover:bg-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block mb-4 text-center text-xl p-4 rounded-lg bg-gray-800 text-white hover:bg-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Shop
            </Link>
            <Link
              
              to="/cart"
              className="block mb-4 text-center text-xl p-4 rounded-lg bg-gray-800 text-white hover:bg-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Cart
              
            </Link>
            
          </nav>
        )}
      </div>
    </div>
  );
};


Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};

export default Navbar;
