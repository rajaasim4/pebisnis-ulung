import React from "react";
import cards from "../../assets/Images/cards.png";
import chart from "../../assets/Images/chart.png";
import shop from "../../assets/Images/shop.png";
import "./Services.css";
const Services = () => {
  return (
    <section className="Services">
      <div className="Services-main">
        <div className="Services-details">
          <span>Services</span>
          <h2>Our Capabilities</h2>
          <p>
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </p>
        </div>
        <ServicesCard
          imgsrc={shop}
          title={"Market Forcast"}
          para={
            "Leverage agile framework to provide a robust high level synopsys overviews"
          }
        />
        <ServicesCard
          imgsrc={cards}
          title={"Fund Raising"}
          para={
            "Bring to the table survival strategies to ensure proactive domination"
          }
        />
        <ServicesCard
          imgsrc={chart}
          title={"Fund Flow"}
          para={
            "Grow the holistic world view of disruptive innovation workspace"
          }
        />
      </div>
    </section>
  );
};

const ServicesCard = (props) => {
  return (
    <>
      <div className="Services-card">
        <img src={props.imgsrc} alt="" />
        <h3>{props.title}</h3>
        <p>{props.para}</p>
      </div>
    </>
  );
};

export default Services;
