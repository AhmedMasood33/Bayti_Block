import React from 'react';
import { Search, Home, FileCheck, CreditCard, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: <Search size={32} className="text-white" />,
      title: "Search & Browse",
      description: "Use our advanced search filters to find properties that match your criteria. View verified listings with detailed descriptions, photos, and 3D tours."
    },
    {
      icon: <Home size={32} className="text-white" />,
      title: "Book a Viewing",
      description: "Schedule in-person viewings or take a virtual tour from the comfort of your home. Our 3D tours give you an immersive experience of the property."
    },
    {
      icon: <FileCheck size={32} className="text-white" />,
      title: "Apply & Sign",
      description: "Complete the application process online, submit your documents, and sign the rental agreement digitally. Our legal team ensures all paperwork is in order."
    },
    {
      icon: <CreditCard size={32} className="text-white" />,
      title: "Pay Securely",
      description: "Handle deposits and monthly rent payments through our secure payment platform. Set up automatic payments and receive digital receipts."
    },
    {
      icon: <CheckCircle size={32} className="text-white" />,
      title: "Move In",
      description: "Receive your keys and move into your new home with confidence. Our support team is available to help with any questions or issues."
    }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-primary py-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-lg max-w-2xl">
            Bayti Block makes finding, renting, and managing properties simple and secure. Learn how our platform works.
          </p>
        </div>
      </div>
      
      {/* Process Steps */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute -left-12 top-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary font-bold rounded-full">
                    {index + 1}
                  </div>
                  
                  {/* Step Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute -left-7 top-10 bottom-0 w-px bg-neutral-300 h-20"></div>
                  )}
                  
                  {/* Step Content */}
                  <div className="flex">
                    <div className="mr-6 rounded-full p-4 bg-primary flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* For Landlords */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">For Property Owners</h2>
            <p className="text-lg text-neutral-600">
              Listing your property on Bayti Block is simple and efficient. Our platform handles everything from marketing to tenant screening.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">List Your Property</h3>
              <p className="text-neutral-600">
                Create a detailed listing with photos, descriptions, and specifications. Our team will arrange professional photography and 3D scanning.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tenant Screening</h3>
              <p className="text-neutral-600">
                We screen potential tenants, verify their information, and handle showings. You'll only deal with qualified, serious applicants.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Management</h3>
              <p className="text-neutral-600">
                Receive rent payments on time, manage maintenance requests, and access all property documents in one secure platform.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/landlords" className="btn btn-primary">
              List Your Property
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Find answers to common questions about using Bayti Block for renting or listing properties.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How does the verification process work?",
                  answer: "All properties undergo a thorough verification process. Our team visits each property, verifies ownership documents, and creates a detailed report. Properties that pass our verification are marked with a 'Verified' badge."
                },
                {
                  question: "Are the 3D tours accurate?",
                  answer: "Yes, our 3D tours are created using professional equipment to provide an accurate representation of the property. You can virtually walk through rooms, check dimensions, and inspect details before scheduling an in-person viewing."
                },
                {
                  question: "What legal protection do I have as a tenant?",
                  answer: "We provide standardized lease agreements that comply with Egyptian rental laws. Our legal team reviews all documents to ensure they protect both parties' rights. We also offer mediation services if disputes arise."
                },
                {
                  question: "How secure are the payments?",
                  answer: "All payments are processed through our secure payment gateway that uses bank-level encryption. You'll receive digital receipts for all transactions, and your payment information is never stored on our servers."
                },
                {
                  question: "What fees do landlords pay?",
                  answer: "Landlords pay a listing fee and a percentage commission on successful rentals. The exact fee structure depends on the services chosen, such as property management, tenant screening, and marketing services."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="btn btn-secondary">
                Have More Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;