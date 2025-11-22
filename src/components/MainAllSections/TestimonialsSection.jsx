import React from "react";
import "./MainSection.jsx"
import { clientsData } from "./data.js";

function TestimonialsSection() {
  return (
    <>
      <section className="TestimonialsSection">
        {clientsData.map((data, i) => (
          <div key={i}>
            <img src={data.image} alt="about image" />
            <p>{data.content}</p>
            <h4>{data.name}</h4>
            <h5>{data.role}</h5>
          </div>
        ))}
      </section>
    </>
  );
}

export default TestimonialsSection;
