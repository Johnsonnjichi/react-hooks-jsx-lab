import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>

    <p>Changing the world with one line of code at a time</p>
    <img src={image} alt="I made this"/>

  </div>
  )
}

export default About;
