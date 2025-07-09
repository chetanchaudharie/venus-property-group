import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    image: "",
    beds: "",
    bathrooms: "",
  });

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await axios.get(`http://localhost:5000/api/properties/${id}`);
      setFormData(res.data);
    };
    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    try {
      await axios.put(`http://localhost:5000/api/properties/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("✅ Property updated successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("❌ Error updating property");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        {["title", "location", "price", "size", "image", "beds", "bathrooms"].map((field) => (
          <div key={field} className="mb-3">
            <label className="form-label text-capitalize">{field}</label>
            <input
              type={field === "price" || field === "beds" || field === "bathrooms" ? "number" : "text"}
              name={field}
              className="form-control"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-dark">Update Property</button>
      </form>
    </div>
  );
};

export default EditProperty;
