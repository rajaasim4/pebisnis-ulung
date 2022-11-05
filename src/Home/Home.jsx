import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Brands from "../Layout/Brands/Brands";
import ChooseUs from "../Layout/ChooseUs/ChooseUs";
import Contact from "../Layout/Contact/Contact";
import Footer from "../Layout/Footer/Footer";
import Hero from "../Layout/Hero/Hero";
import Projects from "../Layout/Projects/Projects";
import Services from "../Layout/Services/Services";
import Testimonials from "../Layout/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <Brands />
      <Services />
      <ChooseUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
