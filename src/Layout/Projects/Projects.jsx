import React from "react";
import p1 from "../../assets/Images/p1.png";
import p2 from "../../assets/Images/p2.png";
import p3 from "../../assets/Images/p3.png";
import p4 from "../../assets/Images/p4.png";
import p5 from "../../assets/Images/p5.png";
import "./Projects.css";
const Projects = () => {
  return (
    <section className="Projects">
      <div className="Projects-main">
        <ProjectCard imgsrc={p1} title={"Cosmetic Forecast Marketing"} />
        <ProjectCard imgsrc={p2} title={"Sales Analytics"} />
        <ProjectCard imgsrc={p3} title={"Fashion Store Mobiles App"} />
        <ProjectCard imgsrc={p4} title={"Laura's Clore Branding Identity"} />
        <ProjectCard imgsrc={p5} title={"SEO Marketing"} />
        <div className="Projects-details">
          <span>Projects </span>
          <h2>Selected Works from Us</h2>

          <button>See More</button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = (props) => {
  return (
    <>
      <div className="Projects-Card">
        <img src={props.imgsrc} alt="" />
        <h3>{props.title}</h3>
      </div>
    </>
  );
};

export default Projects;
