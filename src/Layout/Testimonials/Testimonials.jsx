import React from "react";
import { RiDoubleQuotesL } from "react-icons/all";
import avatar from "../../assets/Images/avatar.png";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <section className="Testimonials">
      <div className="Testimonials-main">
        <div className="Testimonials-heading">
          <span>Testimonial</span>
          <h2>What Our Client's Says</h2>
        </div>
        <div className="Testimonials-section">
          <div className="Testimonials-card">
            <RiDoubleQuotesL />
            <p>
              I really like the team for example, a relationship-focused
              performance expectation might be that the employee sustain
              collegial working relationships with her peers, subordinates and
              customers.
            </p>
            <div className="Testimonials-card-avatar">
              <img src={avatar} alt="" />
              <h3> Gloria Jessica </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
