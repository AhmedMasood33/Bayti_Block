import React from 'react';
import { Users, Shield, MapPin, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-primary py-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Bayti Block</h1>
          <p className="text-lg max-w-2xl">
            Learn about our mission to transform the rental experience in Egypt with trust, transparency, and innovation.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Bayti Block was founded in 2023 with a simple mission: to bring trust and transparency to Egypt's rental market. We saw firsthand the challenges that both tenants and landlords faced in the traditional rental process – from fraudulent listings to payment disputes and legal complications.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                Our team of real estate professionals, technology experts, and legal advisors came together to build a platform that addresses these pain points. By combining innovative technology with local expertise, we've created a secure ecosystem where finding and renting a home is simple, transparent, and trustworthy.
              </p>
              <p className="text-lg text-neutral-700">
                Today, Bayti Block is Egypt's fastest-growing property rental platform, with thousands of verified properties and satisfied users nationwide.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7641848/pexels-photo-7641848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bayti Block team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">Building Trust for every Home</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-neutral-600">
              We're driven by a set of core values that guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-primary mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
              <p className="text-neutral-600">
                We verify every property and user on our platform to create a secure environment for all parties. Trust is at the core of everything we do.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-primary mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-neutral-600">
                We build technology that serves the needs of our communities, helping people find homes they love in neighborhoods where they can thrive.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-primary mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-neutral-600">
                We believe in complete transparency in all aspects of the rental process, from property details to contracts and payments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-neutral-600">
              Meet the experienced professionals leading Bayti Block's mission to transform Egypt's rental market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Mahmoud",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Ahmed brings 15 years of real estate experience and a vision to transform how Egyptians rent homes."
              },
              {
                name: "Laila Ismail",
                role: "Chief Technology Officer",
                image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Laila leads our engineering team, bringing her expertise in developing secure, scalable platforms."
              },
              {
                name: "Omar Saad",
                role: "Head of Operations",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Omar oversees the day-to-day operations, ensuring every property meets our verification standards."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5,000+", label: "Verified Properties" },
              { value: "15,000+", label: "Happy Tenants" },
              { value: "3,000+", label: "Property Owners" },
              { value: "8", label: "Cities Covered" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-neutral-100 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the Bayti Block Community</h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Whether you're looking for a new home or want to list your property, Bayti Block offers a secure, transparent, and efficient platform. Join thousands of satisfied users today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="btn btn-primary">
                Find a Home
              </Link>
              <Link to="/landlords" className="btn btn-secondary">
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;