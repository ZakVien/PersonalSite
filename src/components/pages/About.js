import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./About.css";

const wrigleyAge = () => {
  const currentDate = new Date();
  const wrigleyBirthday = new Date("January 14, 2020");

  const ageInMiliseconds = currentDate - wrigleyBirthday;

  const ageInYears = Math.floor(ageInMiliseconds / (1000 * 60 * 60 * 24) / 365);

  return ageInYears;
};
const wrigleysAge = wrigleyAge();

export default function About() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="container-outer">
        <div className="about__container">
          <h1 className="about">About Zach</h1>
          <div className="about__wrapper">
            <div className="about__items">
              <div className="about__item">
                <h2>Who is Zach?</h2>
                <p>
                  Hey, I’m Zach. I live in Sheboygan with my girlfriend and our{" "}
                  {wrigleysAge}-year old dog, Wrigley.
                </p>
                <p>
                  I'm just about to graduate from the Web &amp; Software
                  Development program at LTC with an Associate's Degree.
                </p>

                <p>
                  After graduation, I plan on continuing to work towards my
                  Bachelor's in Computer Science at Lakeland University.
                </p>
                <p></p>
              </div>
              <div className="about__item">
                <figure className="about__item__image">
                  <img
                    src="/images/portrait.jpg"
                    alt="Portrait of Zach Vienonen"
                  />
                  <figcaption className="about__item__image-caption">
                    Zach standing outside{" "}
                    <a href="https://jakescafe.com">Jake's Cafe</a>.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="about__wrapper">
            <div className="about__items">
              <div className="about__item">
                <h2>What does Zach do?</h2>
                <p>
                  In my free time I enjoy spending time with my girlfriend and
                  Wrigley (for such a small dog, he's got a bunch of energy!).
                </p>
                <p>
                  I also enjoy biking, driving, playing computer games, and
                  working on some beautiful home improvements.
                </p>
                <p>
                  It should go without saying that I also enjoy creating
                  websites in my spare time.
                </p>
              </div>
              <div className="about__item">
                <figure className="about__item__image">
                  <img src="/images/wrigley.jpg" alt="Zach's dog, Wrigley" />
                  <figcaption className="about__item__image-caption">
                    Wrigley getting ready to go on a ride.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="about__wrapper">
            <div className="about__items">
              <div className="about__item">
                <h2>How do I contact Zach?</h2>
                <p>
                  If you like my <Link to="/projects">projects</Link> and want
                  to get in touch, please send me an email (
                  <a href="mailto:zach@zachvien.com">zach@zachvien.com</a>) and
                  I'll get back to you within 24 hours.
                </p>
                <p>
                  I am always looking for new opportunities to help out my
                  community while expanding my skills at the same time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
