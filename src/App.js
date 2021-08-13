import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </>
      </Router>
      <Footer />
    </>
  );
}

export default App;
