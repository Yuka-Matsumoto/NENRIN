import React from "react";

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
          <h2>{service.name}</h2>
          <p>Category: {service.category}</p>
          <p>Price: {service.price}</p>
          <p>Status: {service.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
