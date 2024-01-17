import React, { useState } from "react";

const FormSubmisson = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Username and password are required.");
      return;
    } else {
      setError("");
    }
    // axios post .....
  };
  return (
    <div>
      <h2>Form Submision</h2>
      {error && <p style={{ color: "orangered" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />{" "}
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmisson;
