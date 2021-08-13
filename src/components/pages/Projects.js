import React from "react";
import ProjectCards from "../ProjectCards";
import "../../App.css";
import "../Cards.css";

const cardProps = [
  {
    src: "/images/basecampwebsite.png",
    alt: "Screenshot of BaseCamp USA home page.",
    title: "BaseCamp USA",
    text:
      "BaseCampUSA is a non-profit organization startup dedicated to ensuring that young men have the skills necessary to become strong, participating members of society. This website was built with WordPress and a 30-day deadline. I was new to WordPress, so this was a extraordinary challenge that I was able to complete. I collaborated with full-time copywriters, graphic designers, a project leader, and the owner of BaseCampUSA to deliver this responsive website on time and within budget.",
    label: "WordPress",
    url: "https://basecampusa.org",
  },
  {
    src: "/images/zachssnacks.png",
    alt: "Screenshot of Zach's Snacks home page.",
    title: "Zach's Snacks",
    text:
      "Zach Snacks is a fully functioning e-commerce website created using self-taught languages (ASP.NET/C#) for a semester-long project. This was my first time using C#/ASP.NET and Azure. Learning all of these languages to produce a fully functional site took while learning multiple other languages simultaneously was a challenge that I'm proud to say I overcame. Please note that the link below may take several seconds to load as the website awakes from it's sleeping state on the server.",
    label: "ASP.NET/C#",
    url: "https://zachsnacksecommerce.azurewebsites.net/",
  },
  {
    src: "/images/temiswebsite.png",
    alt: "Screenshot of Temis home page.",
    title: "Temis Outdoors",
    text:
      "Temis Outdoors is a ficticious e-commerce company focusing on providing rural, middle-aged folks with competition to Cabela's, Bass Pro Shop, Gander Outdoors, and the like. This project involved collaboration with a graphic design student and a marketing student throughout an entire semester. The Temis Outdoors website uses PHP to handle it's connection with the database.",
    label: "PHP",
    path: "projects/TemisOutdoors",
    url: "https://zachvien.com/portfolioJakesCafe/Temis/",
  },
  {
    src: "/images/pythonexpenses.png",
    alt: "SneaScreenshotk of the Python Expense tracking app.",
    title: "Expense Tracking",
    text:
      "As someone who tracks my expense using a spreadsheet, I decided to create a web-based version of my expense tracking. This project used Python with Django and Chart.js to provide a fast, functional expense tracker. This project is hosted online and you can create an account and track your own expenses, too!",
    label: "Python/Django",
    path: "projects/PythonExpense",
    url: "https://vienonen02611.pythonanywhere.com/",
  },
  {
    src: "/images/movielistapp.png",
    alt: "Screenshot of Movie List web app.",
    title: "Movie List App",
    text:
      "This mobile-based movie list application was created over several weeks using React and an API. This was my first time using an API and I loved the ability to grab realtime data to populate an application. Users logged in to TheMovieDB.org can use this app to add popular movies to a list of their choice.",
    label: "React",
    path: "projects/MovieApp",
    url: "https://zachvien.com/apps/movielistapp",
  },
  {
    src: "/images/badger.png",
    alt: "Screenshot of Badger Earth Tools home page.",
    title: "Badger Earth Tools",
    text:
      "Badger Earth Tools is a real company that reached out to me while I was interning at Jake's Cafe as a Web Developer. They asked me to upgrade their website and to use the Shopify platform. I had no experience with Shopify prior to this, so it was a learning experience. Unfortunately, I didn't land this job as the customer wanted a functional site in time for Spring.",
    label: "Shopify",
    path: "projects/Badger",
  },
  {
    src: "/images/tedstacotruck.png",
    alt: "Screenshot of Ted's Taco Truck home page.",
    title: "Ted's Taco Truck",
    text:
      "Ted's Taco Truck was a final project for one of my web development courses. The website incorporates multiple languages (HTML, CSS, PHP, SQL). Customer's can register for an account, log in, and place ficticious orders all from the comfort of their bed!",
    label: "PHP",
    path: "projects/TedsTacoTruck",
    url: "https://zachvien.com/portfolioJakesCafe/TedsTacoTruck/",
  },
];

export default function Projects() {
  window.scrollTo(0, 0);
  const strippedTitle = (title) => {
    const stripped = title
      .replace(/[.,/#!$%^&*;:{}=\-_`~()']/g, "")
      .replace(/[" "]/g, "");
    return stripped;
  };

  return (
    <>
      <div className="container-outer">
        <div className="project-cards__container">
          <h1 className="projects">Projects</h1>

          <p className="page-description">
            Please take a few minutes and browse through some of the work that
            I'm most proud of.
            <br />
            Some of my projects are published online, so be sure to check them
            out!
          </p>
          {cardProps.map((prop) => {
            return <ProjectCards {...prop} key={strippedTitle(prop.title)} />;
          })}
        </div>
      </div>
    </>
  );
}
