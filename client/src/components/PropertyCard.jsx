import React from 'react';

const PropertyCard = ({ title, price, location, size, image, beds, bathrooms }) => {
  return (
    <div className="card h-100 property-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>₹{price} /month</strong></p>
        <p className="card-text">{beds} Beds | {bathrooms} Bathrooms | {size}</p>
        <p className="card-text"><small className="text-muted">{location}</small></p>
      </div>
    </div>
  );
};

export default PropertyCard;
