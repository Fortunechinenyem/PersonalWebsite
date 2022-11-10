import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero ">
        <div className="">
          <div className="herotext">
            <h1>Web Developer </h1>
            <Link to="/about" className="btn btn-light mt-4">
              About Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
