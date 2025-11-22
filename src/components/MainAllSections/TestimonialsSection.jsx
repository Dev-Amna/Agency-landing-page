import React from "react";
import "./MainSection.jsx"
import { clientsData } from "./data.js";

function TestimonialsSection() {
   return (
    <section className="TestimonialsSection">
      <h1 className="section-heading">CLIENT TESTIMONIALS</h1>
      <div className="users-row">
        {clientsData.map((data, i) => (
          <div key={i} className="about-users">
            <img src={data.image} alt={data.name} />
            <p>{data.content}</p>
            <h2>{data.name}</h2>
            <h5>{data.role}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
