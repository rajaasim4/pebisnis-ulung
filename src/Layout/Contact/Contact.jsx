import React from "react";
import Contactimg from "../../assets/Images/Contactus.png";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="Contact">
      <div className="Contact-main">
        <div className="Contact-left">
          <img src={Contactimg} alt="" />
        </div>
        <div className="Contact-right">
          <span>Contact</span>
          <h2>Let's Collaborate Now!</h2>
          <form action="">
            <div className="form-control">
              <label htmlFor="">Full Name</label>
              <br />
              <br />
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="form-control">
              <label htmlFor="">Date</label>
              <br />
              <br />
              <input type="date" placeholder="Enter Your date" />
            </div>
            <div className="form-control">
              <label htmlFor="">Email</label>
              <br />
              <br />
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="form-control">
              <label htmlFor="">Message</label>
              <br />
              <br />
              <textarea
                name=""
                id=""
                // cols="30"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
