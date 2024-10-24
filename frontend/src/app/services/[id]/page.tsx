'use client';

import React from "react";
import { useService } from "../../../../hooks/useServices";

// ページコンポーネントの params を使用して id を取得
const ServiceDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { service, loading, error } = useService(id);

  if (loading) return <p>Loading service details...</p>;
  if (error) return <p>{error}</p>;
  if (!service) return <p>No service found</p>;

  return (
    <div>
      <h1>{service.name}</h1>
      <p>Category: {service.category}</p>
      <p>Price: {service.price}</p>
      <p>Status: {service.status}</p>
    </div>
  );
};

export default ServiceDetailPage;
