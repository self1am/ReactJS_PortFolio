import React from "react";
import "./index.css";
import ProfilePic from "../assets/img/h1.png";

function HomePage(){
    return(
        <section className="hero is-fullheight is-fullheight-with-navbar" style={{backgroundColor: '#1E1E1E'}}>
        <div className="hero-head" />
        <div className="hero-body columns is-vcentered">
          <div className="column is-1" />
          <div className="column is-7; has-text-centered; has-text-white">
            <h1 className="is-size-2">Hi y'all <span className="is-family-primary; is-size-1; is-italic;" style={{fontSize: '4.5rem'}}>Hanafe</span> here...<br />
            </h1><h1 className="is-size-4">Freelance Writer | Software Engineer | Occultist</h1>
          </div>
          <div className="column">
            <figure>
              <img src={ProfilePic} width="400px" height="640px"  />
            </figure>
          </div>
        </div>
        <div className="hero-foot" />
      </section>
    );
}

export default HomePage;