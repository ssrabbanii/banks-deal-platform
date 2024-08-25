import React from "react";
import AdminDashboard from "./AdminDashboard";

const AdminPage = () => {
  return (
    <div className="admin-page-container">
      <h1>Admin Portal</h1>
      <div className="admin-dashboard-section">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminPage;
