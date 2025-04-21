import React from 'react';
import { MapPin, Bath, BedDouble, Square, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchSection from '../components/SearchSection';

const PropertiesPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Modern Apartment in Maadi",
      location: "Maadi, Cairo",
      price: 8500,
      beds: 2,
      baths: 1,
      area: 120,
      featured: true,
      verified: true,
      has3DTour: true
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Luxury Villa with Pool",
      location: "New Cairo",
      price: 25000,
      beds: 4,
      baths: 3,
      area: 350,
      featured: true,
      verified: true,
      has3DTour: true
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Cozy Studio in Downtown",
      location: "Downtown, Cairo",
      price: 5000,
      beds: 1,
      baths: 1,
      area: 75,
      verified: true
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beachfront Apartment",
      location: "North Coast",
      price: 15000,
      beds: 3,
      baths: 2,
      area: 180,
      featured: true,
      has3DTour: true
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Penthouse with City View",
      location: "Zamalek, Cairo",
      price: 18000,
      beds: 3,
      baths: 2,
      area: 200,
      verified: true
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Family Home in Heliopolis",
      location: "Heliopolis, Cairo",
      price: 12000,
      beds: 3,
      baths: 2,
      area: 210,
      has3DTour: true
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Garden Apartment",
      location: "6th of October",
      price: 7500,
      beds: 2,
      baths: 1,
      area: 150,
      verified: true
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Modern Office Space",
      location: "Smart Village, Giza",
      price: 35000,
      beds: 0,
      baths: 2,
      area: 250,
      has3DTour: true
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Stylish Loft Apartment",
      location: "El Gouna, Hurghada",
      price: 22000,
      beds: 2,
      baths: 2,
      area: 180,
      verified: true,
      has3DTour: true
    }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-primary py-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Properties for Rent</h1>
          <p className="text-lg max-w-2xl">
            Browse our curated selection of verified properties across Egypt. Use the filters to find your perfect home.
          </p>
        </div>
      </div>
      
      {/* Search Section */}
      <SearchSection />
      
      {/* Properties Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <p className="text-neutral-600">Showing <span className="font-medium">{properties.length}</span> properties</p>
            <select className="input-field w-auto">
              <option value="newest">Newest First</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="featured">Featured</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <div key={property.id} className="property-card group">
                {/* Property Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {property.featured && (
                      <span className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded-md">
                        Featured
                      </span>
                    )}
                    {property.verified && (
                      <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
                        Verified
                      </span>
                    )}
                    {property.has3DTour && (
                      <span className="bg-primary-light text-white text-xs font-bold px-2 py-1 rounded-md">
                        3D Tour
                      </span>
                    )}
                  </div>
                  
                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-white text-primary font-bold px-3 py-1 rounded-md shadow-lg">
                    EGP {property.price.toLocaleString()}
                    <span className="text-xs font-normal text-neutral-600">/month</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">{property.title}</h3>
                  <div className="flex items-center mb-4 text-neutral-600">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="flex justify-between text-neutral-700 border-t border-neutral-200 pt-4">
                    <div className="flex items-center">
                      <BedDouble size={18} className="mr-1" />
                      <span className="text-sm">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={18} className="mr-1" />
                      <span className="text-sm">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={18} className="mr-1" />
                      <span className="text-sm">{property.area} m²</span>
                    </div>
                  </div>
                </div>
                
                {/* Link Overlay */}
                <Link 
                  to={`/properties/${property.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View details for ${property.title}`}
                />
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-neutral-300 rounded-md hover:bg-neutral-100">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button 
                  key={page}
                  className={`w-10 h-10 flex items-center justify-center rounded-md ${
                    page === 1 
                      ? 'bg-primary text-white' 
                      : 'border border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-neutral-300 rounded-md hover:bg-neutral-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;