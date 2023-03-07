import React from "react";
import "./index.css";

function NavBar(){
    return(
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
        <div className="navbar-brand; has-text-white">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width={112} height={28} />
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" style={{color: '#5eabef'}} href="#">
              Home
            </a>
            <a className="navbar-item" style={{color: '#5eabef'}} href="#portfolio">
              Portfolio
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" style={{color: '#5eabef'}}>
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#about">
                  About
                </a>
                <a className="navbar-item" href="#contact">
                  Jobs
                </a>
                <a className="navbar-item" href="#contact">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#contact">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-dark" href="https://www.github.com">
                  <i className="fa-brands fa-github" /><p className="mx-2"><strong>GitHub</strong></p>
                </a>
                <a className="button is-link" href="https://www.facebook.com">
                  <i className="fa-brands fa-facebook" /><p className="mx-2"><strong>Facebook</strong></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});


export default NavBar;