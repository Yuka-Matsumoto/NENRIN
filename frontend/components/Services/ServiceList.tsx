import React from "react";
import Link from "next/link"; // Link コンポーネントをインポート

interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
}

interface ServiceListProps {
  services: Service[];
  loading: boolean;
  error: string | null;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (services.length === 0) return <p>No services found</p>;

  return (
    <div>
      {services.map((service) => (
        <div key={service.id} className="service-card">
          {/* Linkを使ってサービス名をラップ */}
          <Link href={`/services/${service.id}`}>
            <h2>{service.name}</h2>
          </Link>
          <p>Category: {service.category}</p>
          <p>Price: {service.price}</p>
          <p>Status: {service.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
