import React from "react";
import DealList from "./DealList";

const DealsPage = () => {
  return (
    <div className="deals-page-container">
      <h1>Available Deals</h1>
      <div className="deal-list-section">
        <DealList />
      </div>
    </div>
  );
};

export default DealsPage;
