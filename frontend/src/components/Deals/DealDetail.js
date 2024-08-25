import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDealById } from "../api/dealApi";

const DealDetail = () => {
  const { id } = useParams(); // Get the deal ID from the URL
  const [deal, setDeal] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDeal = async () => {
      try {
        const data = await getDealById(id);
        setDeal(data);
      } catch (err) {
        setError("Failed to load deal details. Please try again.");
      }
    };

    fetchDeal();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!deal) {
    return <p>Loading deal details...</p>;
  }

  return (
    <div className="deal-detail-container">
      <h2>{deal.dealName}</h2>
      <p>{deal.dealDescription}</p>
      <p>
        <strong>Credit Card:</strong> {deal.dealCreditCard}
      </p>
      <p>
        <strong>Promotion Period:</strong> {deal.promotionStartDate} to{" "}
        {deal.promotionEndDate}
      </p>
      {deal.dealImage && <img src={deal.dealImage} alt={deal.dealName} />}
      <p>
        <strong>Customer Service Hotline:</strong> {deal.customerServiceHotline}
      </p>
      <a
        href={deal.productLeafletUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        More Information
      </a>
    </div>
  );
};

export default DealDetail;
