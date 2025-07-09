// src/pages/AddProperty.jsx
import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    image: "",
    beds: "",
    bathrooms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");

      await axios.post("http://localhost:5000/api/properties", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Property added successfully!");
      setFormData({
        title: "",
        location: "",
        price: "",
        size: "",
        image: "",
        beds: "",
        bathrooms: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding property");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        {[
          { name: "title", type: "text" },
          { name: "price", type: "number" },
          { name: "location", type: "text" },
          { name: "size", type: "text" },
          { name: "image", type: "text" },
          { name: "beds", type: "number" },
          { name: "bathrooms", type: "number" },
        ].map((field) => (
          <div key={field.name} className="mb-3">
            <label className="form-label text-capitalize">{field.name}</label>
            <input
              type={field.type}
              name={field.name}
              className="form-control"
              placeholder={`Enter ${field.name}`}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-dark">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
