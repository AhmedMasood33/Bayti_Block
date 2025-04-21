import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Building } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tenant CTA */}
          <div className="bg-white rounded-lg shadow-card p-8 hover:shadow-card-hover transition-shadow duration-300">
            <div className="rounded-full bg-primary-light p-4 inline-flex mb-6">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Looking for a home?</h3>
            <p className="text-neutral-600 mb-6">
              Find your perfect rental with verified listings, 3D tours, and legal protection. Start browsing today.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Access to verified properties', 
                'View 3D tours from anywhere',
                'Legal support throughout your rental',
                'Secure digital payments'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/properties" className="btn btn-primary">
              Browse Properties
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          {/* Landlord CTA */}
          <div className="bg-primary text-white rounded-lg shadow-card p-8 hover:shadow-card-hover transition-shadow duration-300">
            <div className="rounded-full bg-white p-4 inline-flex mb-6">
              <Building size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Own a property?</h3>
            <p className="text-neutral-100 mb-6">
              List your property on Bayti Block and reach thousands of verified tenants. Hassle-free management and secure payments.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Reach qualified, verified tenants', 
                'We handle 3D tours and verification',
                'Get legal support and documentation',
                'Receive payments securely and on time'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span className="text-neutral-100">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/landlords" className="btn bg-white text-primary hover:bg-neutral-100">
              List Your Property
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;