import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Instagram } from 'lucide-react'; // icon from lucide-react
import logo from '../assets/logo.jpeg'; // replace with your actual logo file

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-amber-200 via-pink-100 to-rose-200 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left: Logo + Brand */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src={logo}
          alt="Srishti by Krishna"
          className="w-10 h-10 rounded-full mr-3 shadow-sm"
        />
        <h1
          className="text-2xl md:text-3xl font-bold text-amber-900"
          style={{
            fontFamily: "'Dancing Script', cursive",
            letterSpacing: '1px',
          }}
        >
          Srishti by Krishna
        </h1>
      </div>

      {/* Right: Navigation */}
      <nav className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-amber-900 font-medium hover:text-amber-700 transition-colors"
        >
          Home
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center text-amber-900 font-medium hover:text-amber-700"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/srishti_by_krishna?igsh=eGJyY3NraWE4bXRk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
