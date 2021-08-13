import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <>
      <div className="home-container-outer">
        <div className="cards">
          <h1>Check out some of my favorite projects!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/basecampwebsite.png"
                  alt="Screenshot of BaseCamp USA home page."
                  text="A responsive WordPress website designed with a custom theme for BaseCamp USA, a non-profit startup organization."
                  label="WordPress"
                  path="/projects/#BaseCampUSA"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="/images/zachssnacks.png"
                  alt="Screenshot of Zach's Snacks home page."
                  text="A fully functioning website designed using self-taught languages (ASP.NET/C#)."
                  label="ASP.NET/C#"
                  path="/projects/#ZachsSnacks"
                />
                <CardItem
                  src="images/temiswebsite.png"
                  alt="Screenshot of Temis home page."
                  text="An e-commerce website created from the ground up using PHP and several other programming languages"
                  label="PHP"
                  path="/projects/#TemisOutdoors"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="images/pythonexpenses.png"
                  alt="Screenshot of the Python Expense tracking app."
                  text="An expense tracking web app designed using self-taught Python/Django."
                  label="Python/Django"
                  path="/projects/#ExpenseTracking"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="images/movielistapp.png"
                  alt="Screenshot of Movie List web app."
                  text="A mobile-focused webapp utilizing an API from TheMovieDb.org."
                  label="React"
                  path="/projects/#MovieListApp"
                />
                <CardItem
                  src="images/badger.png"
                  alt="Screenshot of Badger Earth Tools home page."
                  text="A website created on the Shopify platform for Badger Earth Tools."
                  label="Shopify"
                  path="/projects/#BadgerEarthTools"
                />
                <CardItem
                  src="images/tedstacotruck.png"
                  alt="Screenshot of Ted's Taco Truck home page."
                  text="A website built with HTML, Bootstrap, PHP and a MySQL database."
                  label="PHP"
                  path="/projects/#TedsTacoTruck"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
