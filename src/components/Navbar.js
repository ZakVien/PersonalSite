import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showName = () => {
    window.innerWidth <= 960 ? setName("Zach") : setName("Zach Vienonen");
  };

  useEffect(() => {
    showName();
  }, []);

  window.addEventListener("resize", showName);

  return (
    <>
      <Headroom>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <i className="fas fa-laptop-code" />
              {name}
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Headroom>
    </>
  );
}

export default Navbar;
