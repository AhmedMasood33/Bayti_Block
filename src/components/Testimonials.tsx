import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, image, text, rating }) => (
  <div className="bg-white rounded-lg shadow-card p-8 flex flex-col h-full">
    {/* Rating */}
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          fill={i < rating ? 'currentColor' : 'none'}
          className={i < rating ? 'text-secondary' : 'text-neutral-300'}
        />
      ))}
    </div>
    
    {/* Quote */}
    <blockquote className="text-neutral-700 italic mb-6 flex-grow">
      "{text}"
    </blockquote>
    
    {/* Person */}
    <div className="flex items-center mt-auto">
      <div className="mr-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="font-semibold text-neutral-800">{name}</p>
        <p className="text-sm text-neutral-600">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sara Ahmed",
      role: "Tenant",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Finding my apartment through Bayti Block was incredibly easy. The 3D tour let me see every detail before visiting, and the verification process made me feel secure about my choice.",
      rating: 5
    },
    {
      name: "Mohamed Kamel",
      role: "Landlord",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "As a property owner, I was hesitant about listing online. Bayti Block's verification process and legal support have made renting out my properties stress-free. Highly recommended!",
      rating: 5
    },
    {
      name: "Nour El-Din",
      role: "Tenant",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "The digital payment system made paying rent so convenient. I love having all my rental documents in one place, and the customer support team is always responsive.",
      rating: 4
    },
    {
      name: "Layla Hassan",
      role: "Property Manager",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Managing multiple properties is much easier with Bayti Block. The platform streamlines everything from listings to payments, saving me hours each week.",
      rating: 5
    },
    {
      name: "Ahmed Mahmoud",
      role: "Tenant",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I relocated to Cairo for work and needed to find an apartment quickly. The virtual tours and verified listings on Bayti Block made it possible to secure a great place remotely.",
      rating: 4
    }
  ];
  
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  
  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prev) => 
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-neutral-600">
            Discover why thousands of tenants and landlords trust Bayti Block for their housing needs.
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials
              .slice(startIndex, startIndex + visibleCount)
              .map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 md:hidden">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;