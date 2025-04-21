import React from 'react';
import { Shield, CheckCircle, Lock } from 'lucide-react';

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, title, description }) => (
  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
    <div className="text-primary mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  </div>
);

const TrustBadges: React.FC = () => {
  return (
    <section className="py-8 bg-neutral-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TrustBadge
            icon={<Shield size={28} />}
            title="Verified Properties"
            description="All listings undergo thorough verification"
          />
          <TrustBadge
            icon={<CheckCircle size={28} />}
            title="Secure Payments"
            description="Bank-level encryption for all transactions"
          />
          <TrustBadge
            icon={<Lock size={28} />}
            title="Legal Protection"
            description="Contracts and documentation handled with care"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;