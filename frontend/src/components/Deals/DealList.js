import React, { useState, useEffect } from "react";
import { getAllDeals } from "../api/dealApi";

const DealList = () => {
  const [deals, setDeals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const data = await getAllDeals();
        setDeals(data);
      } catch (err) {
        setError("Failed to load deals. Please try again.");
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="deal-list-container">
      <h2>Available Deals</h2>
      {error && <div className="error">{error}</div>}
      {deals.length > 0 ? (
        <ul className="deal-list">
          {deals.map((deal) => (
            <li key={deal._id} className="deal-item">
              <h3>{deal.dealName}</h3>
              <p>{deal.dealDescription}</p>
              <p>
                <strong>Credit Card:</strong> {deal.dealCreditCard}
              </p>
              {deal.dealImage && (
                <img src={deal.dealImage} alt={deal.dealName} />
              )}
              <p>
                <strong>Promotion Period:</strong> {deal.promotionStartDate} to{" "}
                {deal.promotionEndDate}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No deals available at the moment.</p>
      )}
    </div>
  );
};

export default DealList;
