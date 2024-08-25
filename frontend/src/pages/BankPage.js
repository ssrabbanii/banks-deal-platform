import React from "react";
import BankDashboard from "./BankDashboard";
import SubmitAPI from "./SubmitAPI";

const BankPage = () => {
  return (
    <div className="bank-page-container">
      <h1>Bank Portal</h1>
      <div className="bank-dashboard-section">
        <BankDashboard />
      </div>
      <div className="submit-api-section">
        <SubmitAPI />
      </div>
    </div>
  );
};

export default BankPage;
