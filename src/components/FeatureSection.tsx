import React from 'react';
import { Video, Shield, Scale, CreditCard, Home } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 text-center hover:transform hover:scale-105 transition-transform duration-300">
    <div className="rounded-full bg-primary-light p-4 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </div>
);

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Video size={28} className="text-white" />,
      title: "3D Virtual Tours",
      description: "Experience properties remotely with immersive 3D tours that show every detail."
    },
    {
      icon: <Shield size={28} className="text-white" />,
      title: "AI Verification",
      description: "All listings undergo AI verification to ensure accuracy and prevent fraud."
    },
    {
      icon: <Scale size={28} className="text-white" />,
      title: "Legal Protection",
      description: "Comprehensive legal support for both tenants and landlords throughout the process."
    },
    {
      icon: <CreditCard size={28} className="text-white" />,
      title: "Digital Payments",
      description: "Secure payment platform for deposits, rent, and other transactions."
    },
    {
      icon: <Home size={28} className="text-white" />,
      title: "Floor Plans",
      description: "Detailed digital floor plans to help you understand the property layout."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Renting with Confidence</h2>
          <p className="text-lg text-neutral-600">
            Bayti Block provides innovative features to make your rental experience seamless and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;