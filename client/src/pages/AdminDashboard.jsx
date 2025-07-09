// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
    } else {
      setAdminData({ email: "admin@example.com" });
      fetchProperties();
    }
  }, [navigate]);

  const fetchProperties = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/properties");
      setProperties(res.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;
    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`http://localhost:5000/api/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProperties(properties.filter((prop) => prop._id !== id));
    } catch (err) {
      console.error("Failed to delete property:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      {adminData ? (
        <>
          <p>Welcome, <strong>{adminData.email}</strong></p>

          <div className="list-group mb-4">
            <Link to="/admin/add-property" className="list-group-item list-group-item-action">
              ➕ Add New Property
            </Link>
          </div>

          <h4>All Properties</h4>
          {properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-hover mt-3">
                <thead className="table-light">
                  <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Beds</th>
                    <th>Baths</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((prop) => (
                    <tr key={prop._id}>
                      <td>{prop.title}</td>
                      <td>{prop.location}</td>
                      <td>₹{prop.price}</td>
                      <td>{prop.beds}</td>
                      <td>{prop.bathrooms}</td>
                      <td>
                        <Link to={`/admin/edit-property/${prop._id}`} className="btn btn-sm btn-warning me-2">
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(prop._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <p>Loading admin data...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
