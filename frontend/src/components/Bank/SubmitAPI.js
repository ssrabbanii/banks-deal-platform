import React, { useState } from "react";
import { submitApiLink } from "../api/bankApi";

const SubmitAPI = () => {
  const [apiLink, setApiLink] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const data = await submitApiLink(apiLink, userInfo.token);
      setApiLink(data.bank.apiLink);
      setSuccess("API link submitted successfully!");
    } catch (err) {
      setError("Failed to submit API link. Please try again.");
    }
  };

  return (
    <div className="submit-api-container">
      <h3>Submit Your API Link</h3>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
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
      {apiLink && (
        <div className="submitted-api">
          <p>
            <strong>Submitted API Link:</strong> {apiLink}
          </p>
        </div>
      )}
    </div>
  );
};

export default SubmitAPI;
