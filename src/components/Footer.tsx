import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="space-y-6">
            <Logo footer />
            <p className="text-neutral-300 text-sm leading-relaxed">
              Building trust for every home. Egypt's trusted property rental platform offering secure rentals with 3D tours, verification, and legal support.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2 rounded-full bg-primary-light hover:bg-primary-dark transition-colors duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Properties', 'How It Works', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Property Types</h3>
            <ul className="space-y-4">
              {['Apartments', 'Villas', 'Compounds', 'Commercial', 'Vacation Homes'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/properties?type=${item.toLowerCase()}`}
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-neutral-300 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">123 Cairo Boulevard, New Cairo, Egypt</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-neutral-300 flex-shrink-0" />
                <a href="mailto:info@baytiblock.com" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  info@baytiblock.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-neutral-300 flex-shrink-0" />
                <a href="tel:+20123456789" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  +20 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 mt-12 border-t border-primary-light text-sm text-neutral-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Bayti Block. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;