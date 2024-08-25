import React, { useState, useEffect } from "react";
import { submitApiLink, requestHelp } from "../api/bankApi";

const BankDashboard = () => {
  const [apiLink, setApiLink] = useState("");
  const [helpMessage, setHelpMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submittedApi, setSubmittedApi] = useState("");
  const [helpRequests, setHelpRequests] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    // Fetch existing API link and help requests from backend
    // This is where you would add an API call to fetch the bank's data
    // For now, assume `submittedApi` and `helpRequests` are set manually or from previous data
  }, []);

  const handleApiSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const data = await submitApiLink(apiLink, userInfo.token);
      setSubmittedApi(data.bank.apiLink);
      setSuccess("API link submitted successfully!");
    } catch (err) {
      setError("Failed to submit API link. Please try again.");
    }
  };

  const handleHelpRequest = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const data = await requestHelp(helpMessage, userInfo.token);
      setHelpRequests(data.helpRequests);
      setSuccess("Help request submitted successfully!");
    } catch (err) {
      setError("Failed to submit help request. Please try again.");
    }
  };

  return (
    <div className="bank-dashboard-container">
      <h2>Bank Dashboard</h2>
      <SubmitAPI />
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      {/* API Submission Section */}
      <section className="api-submission">
        <h3>Submit API Link</h3>
        <form onSubmit={handleApiSubmit}>
          <div className="form-group">
            <label>API Link</label>
            <input
              type="url"
              value={apiLink}
              onChange={(e) => setApiLink(e.target.value)}
              placeholder="Enter your API link"
              required
            />
          </div>
          <button type="submit">Submit API</button>
        </form>
        {submittedApi && (
          <div className="submitted-api">
            <p>
              <strong>Submitted API Link:</strong> {submittedApi}
            </p>
          </div>
        )}
      </section>

      {/* Help Request Section */}
      <section className="help-request">
        <h3>Request Help</h3>
        <form onSubmit={handleHelpRequest}>
          <div className="form-group">
            <label>Help Message</label>
            <textarea
              value={helpMessage}
              onChange={(e) => setHelpMessage(e.target.value)}
              placeholder="Describe the help you need"
              required
            />
          </div>
          <button type="submit">Request Help</button>
        </form>
        {helpRequests.length > 0 && (
          <div className="help-requests">
            <h4>Previous Help Requests</h4>
            <ul>
              {helpRequests.map((req, index) => (
                <li key={index}>
                  {req.message} - {new Date(req.date).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default BankDashboard;
