import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, Search, User } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {['Home', 'Properties', 'How It Works', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={({ isActive }) => 
                    `text-sm font-medium ${
                      isScrolled 
                        ? (isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary') 
                        : (isActive ? 'text-white font-semibold' : 'text-white hover:text-neutral-200')
                    } transition-colors duration-300`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            to="/login" 
            className={`btn btn-sm ${
              isScrolled ? 'btn-secondary' : 'text-white border border-white hover:bg-white hover:text-primary'
            }`}
          >
            Log In
          </Link>
          <Link 
            to="/signup" 
            className={`btn btn-sm ${
              isScrolled ? 'btn-primary' : 'bg-white text-primary hover:bg-neutral-100'
            }`}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 p-2 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-neutral-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-neutral-800' : 'text-white'} size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-primary z-40 transition-transform duration-300 ease-in-out transform lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container flex flex-col h-full py-20">
            <nav className="flex-1">
              <ul className="space-y-6 py-8">
                {[
                  { name: 'Home', icon: Home },
                  { name: 'Properties', icon: Search },
                  { name: 'How It Works', icon: null },
                  { name: 'About Us', icon: null },
                  { name: 'Contact', icon: null }
                ].map((item) => (
                  <li key={item.name}>
                    <NavLink 
                      to={item.name === 'Home' ? '/' : `/${item.name.toLowerCase().replace(' ', '-')}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `flex items-center text-xl font-medium ${
                          isActive ? 'text-white font-semibold' : 'text-neutral-200 hover:text-white'
                        }`
                      }
                    >
                      {item.icon && <item.icon className="mr-3" size={20} />}
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="py-8 border-t border-primary-light">
              <div className="space-y-4">
                <Link 
                  to="/login" 
                  className="flex items-center text-xl font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="mr-3" size={20} />
                  Log In
                </Link>
                <Link 
                  to="/signup" 
                  className="btn btn-lg w-full bg-white text-primary hover:bg-neutral-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;