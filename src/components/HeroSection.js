import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video_1.mp4" autoPlay loop muted />
      <h1>Hello, world.</h1>
      <h1>I'm Zach.</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          pageName="about"
        >
          About Me
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          pageName="projects"
        >
          Projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
