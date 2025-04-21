import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Filter } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rent');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-card p-6">
          {/* Search Tabs */}
          <div className="flex mb-6 border-b">
            {['rent', 'buy'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-medium text-lg capitalize ${
                  activeTab === tab 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Search Form */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-neutral-500" />
              </div>
              <input
                type="text"
                placeholder="Search by location, property name, or keyword"
                className="input-field pl-10"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={20} className="text-neutral-500" />
                </div>
                <select className="input-field pl-10 appearance-none">
                  <option value="">Location</option>
                  <option value="cairo">Cairo</option>
                  <option value="giza">Giza</option>
                  <option value="alexandria">Alexandria</option>
                  <option value="sharm-el-sheikh">Sharm El Sheikh</option>
                </select>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Home size={20} className="text-neutral-500" />
                </div>
                <select className="input-field pl-10 appearance-none">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign size={20} className="text-neutral-500" />
                </div>
                <select className="input-field pl-10 appearance-none">
                  <option value="">Price Range</option>
                  <option value="0-5000">EGP 0 - 5,000</option>
                  <option value="5000-10000">EGP 5,000 - 10,000</option>
                  <option value="10000-20000">EGP 10,000 - 20,000</option>
                  <option value="20000+">EGP 20,000+</option>
                </select>
              </div>
            </div>
            
            {/* Advanced Filters */}
            {showMoreFilters && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-neutral-200 animate-fadeIn">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Bedrooms</label>
                  <select className="input-field">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Bathrooms</label>
                  <select className="input-field">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Area (sqm)</label>
                  <select className="input-field">
                    <option value="">Any</option>
                    <option value="50-100">50-100</option>
                    <option value="100-150">100-150</option>
                    <option value="150-200">150-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Features</label>
                  <select className="input-field">
                    <option value="">Any</option>
                    <option value="balcony">Balcony</option>
                    <option value="pool">Pool</option>
                    <option value="gym">Gym</option>
                    <option value="parking">Parking</option>
                  </select>
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button 
                type="button" 
                className="text-primary font-medium flex items-center hover:underline w-full sm:w-auto justify-center sm:justify-start"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
              >
                <Filter size={18} className="mr-1" />
                {showMoreFilters ? 'Less filters' : 'More filters'}
              </button>
              
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;