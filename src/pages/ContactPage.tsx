import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-primary py-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl">
            Get in touch with our team for any questions, feedback, or support. We're here to help.
          </p>
        </div>
      </div>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-neutral-600 mb-8">
                Whether you have a question about our services, need assistance with your rental, or want to join our team, we're ready to answer your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full text-white">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-neutral-600">123 Cairo Boulevard, New Cairo, Egypt</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full text-white">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@baytiblock.com" className="hover:text-primary transition-colors">
                        info@baytiblock.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full text-white">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+20123456789" className="hover:text-primary transition-colors">
                        +20 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full text-white">
                      <MessageSquare size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Live Chat</h3>
                    <p className="text-neutral-600">
                      Available Monday-Friday, 9AM-6PM
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Monday - Thursday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Friday</span>
                    <span className="font-medium">9:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-success-light p-6 rounded-lg text-center">
                  <CheckCircle size={48} className="mx-auto mb-4 text-success" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-neutral-600">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="property">Property Listing</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="input-field"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-neutral-600">
              Our office is conveniently located in New Cairo, with easy access from major roads.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-primary">
            {/* Map would be integrated here, typically with Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center bg-neutral-300">
              <p className="text-neutral-700 font-medium">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600">
              Find quick answers to common questions before reaching out.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are your customer support hours?",
                  answer: "Our customer support team is available Monday through Friday from 9AM to 6PM, and Saturday from 10AM to 2PM. For urgent matters, we have an emergency support line available 24/7."
                },
                {
                  question: "How quickly can I expect a response?",
                  answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, our response time is typically within 4 hours."
                },
                {
                  question: "Can I visit your office without an appointment?",
                  answer: "While walk-ins are welcome, we recommend scheduling an appointment to ensure that the appropriate team member is available to assist you."
                },
                {
                  question: "Do you have offices in other cities?",
                  answer: "Currently, our main office is in New Cairo, but we have representative agents in Alexandria, Hurghada, and Sharm El Sheikh to assist clients in those areas."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;