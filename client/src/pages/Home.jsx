import React, { useEffect, useState } from "react";
import { getProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import "../App.css";
import heroBg from '../assets/heroBg.png'; // adjust the path as per your project structure

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProperties();
        setProperties(res.data);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
  className="hero-section text-center"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '200px 40px',
    backgroundColor: '#eaf7f9', // fallback color
  }}
>
  <div className="container">
    <h1 className="display-5 fw-bold">
      Find Houses, Apartments and Flats for Rent in Noida
    </h1>
    <p className="lead">Verified Tenants for Verified Properties</p>
    <div className="input-group mt-4 w-75 mx-auto">
  <select className="form-select" defaultValue="">
    <option value="" disabled>
      Select a location
    </option>
    <option value="Noida">Noida</option>
    <option value="Noida Extension">Noida Extension</option>
    <option value="Greater Noida">Greater Noida</option>
    <option value="Indirapuram">Indirapuram</option>
    <option value="Ghaziabad">Ghaziabad</option>
  </select>
  <button className="btn btn-dark">Search</button>
</div>
  </div>
</section>

      {/* Services Section */}
      <section className="services-section py-5">
  <div className="container text-center">
    <h2 className="mb-4">Our Services</h2>
    <div className="row justify-content-center">
      {[
        "Key Management",
        "Property Management",
        "Renting Solution",
        "Rent Agreement",
        "Packers & Movers",
      ].map((service, index) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4" key={index}>
          <div className="card p-3 shadow-sm" style={{ width: "100%", maxWidth: "180px" }}>
            <h6 className="mb-0">{service}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Dynamic Property Listings */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Latest Listed Properties</h2>
          <div className="row">
            {properties.map((property) => (
              <div className="col-md-4 mb-4" key={property._id}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Venus Property Group?</h2>
          <div className="row">
            {[
              "All Rental Solutions Under One Roof",
              "Verification & Documentation",
              "Smooth House Visits",
              "Minimal Charges",
              "Virtual Meetings",
              "Single Point of Contact",
            ].map((point, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card p-3 h-100 shadow-sm">
                  <p>{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="testimonials-section py-5">
  <div className="container text-center">
    <h2 className="mb-4">Testimonials</h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card p-3 shadow-sm">
          <p>
            “Dear Kamlesh, Thank you for helping me find the perfect apartment in Indirapuram. Your team made the whole process smooth and stress-free!”
          </p>
          <small className="text-muted">- Karan Malhotra, Ghaziabad</small>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card p-3 shadow-sm">
          <p>
            “Dear Kamlesh, I truly appreciate your prompt responses and guidance throughout my property search. Found a great place within days!”
          </p>
          <small className="text-muted">- Sneha Rathi, Vaishali</small>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card p-3 shadow-sm">
          <p>
            “Dear Kamlesh, Your support and professionalism made all the difference. Thanks for helping me get a great rental flat!”
          </p>
          <small className="text-muted">- Vivek Arora, Raj Nagar Extension</small>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-1">&copy; 2025 Venus Property Group. All rights reserved.</p>
          <small>Contact: support@venuspropertygroup.com | +91-9311592231</small>
        </div>
      </footer>
    </>
  );
};

export default Home;