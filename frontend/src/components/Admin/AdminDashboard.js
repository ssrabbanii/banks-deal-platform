import React, { useState, useEffect } from "react";
import { fetchAllBanks } from "../api/adminApi";
import { fetchDeals } from "../api/dealApi";

const AdminDashboard = () => {
  const [banks, setBanks] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const loadBanks = async () => {
      try {
        const data = await fetchAllBanks(userInfo.token);
        setBanks(data);
      } catch (err) {
        setError("Failed to load banks. Please try again.");
      }
    };

    loadBanks();
  }, [userInfo.token]);

  const handleFetchDeals = async () => {
    setError("");
    setSuccess("");

    try {
      await fetchDeals(userInfo.token);
      setSuccess("Deals fetched and stored successfully!");
    } catch (err) {
      setError("Failed to fetch deals. Please try again.");
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      {/* Banks List */}
      <section className="banks-list">
        <h3>Registered Banks</h3>
        {banks.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Bank Name</th>
                <th>Email</th>
                <th>Submitted API Link</th>
                <th>Help Requests</th>
              </tr>
            </thead>
            <tbody>
              {banks.map((bank) => (
                <tr key={bank._id}>
                  <td>{bank.name}</td>
                  <td>{bank.email}</td>
                  <td>{bank.apiLink || "No API submitted"}</td>
                  <td>
                    {bank.helpRequests.length > 0
                      ? bank.helpRequests.map((req, index) => (
                          <p key={index}>
                            {req.message} -{" "}
                            {new Date(req.date).toLocaleString()}
                          </p>
                        ))
                      : "No help requests"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No banks registered yet.</p>
        )}
      </section>

      {/* Fetch Deals Button */}
      <section className="fetch-deals">
        <h3>Fetch Deals from Banks</h3>
        <button onClick={handleFetchDeals}>Fetch Deals</button>
      </section>
    </div>
  );
};

export default AdminDashboard;
