import React from 'react';
import { MapPin, Bath, BedDouble, Square, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  featured?: boolean;
  verified?: boolean;
  has3DTour?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  featured = false,
  verified = false,
  has3DTour = false
}) => {
  return (
    <div className="property-card group">
      {/* Property Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {featured && (
            <span className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded-md">
              Featured
            </span>
          )}
          {verified && (
            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
              Verified
            </span>
          )}
          {has3DTour && (
            <span className="bg-primary-light text-white text-xs font-bold px-2 py-1 rounded-md">
              3D Tour
            </span>
          )}
        </div>
        
        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-white text-primary font-bold px-3 py-1 rounded-md shadow-lg">
          EGP {price.toLocaleString()}
          <span className="text-xs font-normal text-neutral-600">/month</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{title}</h3>
        <div className="flex items-center mb-4 text-neutral-600">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        {/* Features */}
        <div className="flex justify-between text-neutral-700 border-t border-neutral-200 pt-4">
          <div className="flex items-center">
            <BedDouble size={18} className="mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square size={18} className="mr-1" />
            <span className="text-sm">{area} m²</span>
          </div>
        </div>
      </div>
      
      {/* Link Overlay */}
      <Link 
        to={`/properties/${id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${title}`}
      />
    </div>
  );
};

const FeaturedProperties: React.FC = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Properties</h2>
            <p className="text-neutral-600 max-w-xl">
              Discover our handpicked selection of premium properties from across Egypt.
            </p>
          </div>
          <Link 
            to="/properties" 
            className="mt-4 md:mt-0 btn btn-secondary"
          >
            View All Properties
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;