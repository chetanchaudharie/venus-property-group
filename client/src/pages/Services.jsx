import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: "Key Management",
    description:
      "We ensure secure handling and timely exchange of property keys between owners and tenants. Whether it's tenant handover, inspection access, or maintenance entry—we handle it professionally, avoiding hassle for both parties.",
  },
  {
    title: "Property Management",
    description:
      "We offer complete property care—regular inspections, rent follow-ups, tenant coordination, and maintenance tracking—giving landlords peace of mind and keeping properties well-maintained.",
  },
  {
    title: "Renting Solution",
    description:
      "From listing your property with attractive visuals to filtering quality tenants and conducting showings, we take care of the entire rental process quickly and efficiently.",
  },
  {
    title: "Rent Agreement",
    description:
      "We draft legally compliant and customized rent agreements, handle stamping and e-signing, and ensure both parties are protected with clear, enforceable terms.",
  },
  {
    title: "Packers & Movers",
    description:
      "Moving in or out? Our trusted packers and movers partners ensure safe, timely relocation with proper packing, loading, and insurance coverage—making shifting stress-free.",
  },
];

const Services = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className={`text-center mb-4 ${styles.heading}`}>Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm p-3">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <p className="mb-1">&copy; 2025 Venus Property Group. All rights reserved.</p>
          <small>Contact: support@venuspropertygroup.com | +91-9311592231</small>
        </div>
      </footer>
    </>
  );
};

export default Services;