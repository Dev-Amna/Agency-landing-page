import React from "react";
import "./MainSection.css";
import emilyImage from "../../assets/images/image-emily.jpg";
import thomasImage from "../../assets/images/image-thomas.jpg";
import jennieImage from "../../assets/images/image-jennie.jpg";

export const clientsData = [
  {
    image: emilyImage,
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit",
    name: "Emily R.",
    role: "Marketing Director",
  },
  {
    image: thomasImage,
    content:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience",
    name: "Thomas S.",
    role: "Chief Operating Officer",
  },
  {
    image: jennieImage,
    content:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    role: "Business Owner",
  },
];

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
