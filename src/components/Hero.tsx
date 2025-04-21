import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBjeD0iMTAiIGN5PSIxMCIgcj0iOCIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Trust for<br />every Home
            </h1>
            <p className="text-lg md:text-xl text-neutral-100 mb-8 max-w-lg">
              Find your perfect home with Egypt's most trusted property rental platform. Verified properties, secure payments, and legal protection.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/properties" className="btn btn-lg bg-white text-primary hover:bg-neutral-100">
                Find Properties
              </Link>
              <Link to="/how-it-works" className="btn btn-lg border border-white text-white hover:bg-primary-light">
                How It Works
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-xl font-bold">1K+</span>
                </div>
                <span className="ml-3 text-sm">Verified Properties</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-xl font-bold">5K+</span>
                </div>
                <span className="ml-3 text-sm">Happy Tenants</span>
              </div>
              <div className="hidden md:flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-xl font-bold">99%</span>
                </div>
                <span className="ml-3 text-sm">Trust Rating</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="slide-up relative mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern apartment interior"
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Overlay Info Card */}
              <div className="absolute -bottom-10 left-8 right-8 bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-primary text-xl font-semibold">Modern Villa</h3>
                    <p className="text-neutral-600">New Cairo, Egypt</p>
                    <div className="mt-2 flex">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-white mr-2">
                        Verified
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success text-white">
                        3D Tour
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-neutral-600">Starting from</p>
                    <p className="text-xl font-bold text-primary">EGP 25,000</p>
                    <p className="text-xs text-neutral-500">per month</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3D Tour Badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-primary font-bold py-1 px-3 rounded-full transform rotate-12 shadow-lg">
              3D Tour Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;