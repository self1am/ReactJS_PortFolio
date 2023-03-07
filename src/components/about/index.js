import React from "react";
import "./index.css";

function About(){
    return(
        <section className="hero is-primary is-fullheight is-fullheight-with-navbar" style={{backgroundColor: '#490d0d'}} id="about">
        <div className="columns" />
        <div className="columns is-vcentered">
          <div className="column is-7">
          </div>
          <div className="column">
            <h1 className="title is-1">
              About
            </h1> 
          </div>
        </div>
        <div className="hero is-fullheight; columns">
          <div className="column is-7 mx-6"><h1 className="is-size-4">A passionate learner and a design enthusiast, I try to live by the principle</h1><br />
            <h1 className="is-size-2" style={{fontFamily: 'cursive'}}>genius is in simplicity</h1><br /><h1 className="title is-4">Having years of hands-on experience in programming and software engineering, I provide intelligent software solutions to clients.</h1>
          </div>
        </div>
        <div className="hero-foot">
          <div className="columns">
            <div className="column is-6">
            </div>
            <div className="column">
              <h1 className="title is-1">Education</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column mx-2">
              <h1 className="is-size-2 mx-6">B. Sc. in Information Systems</h1>
              <h1 className="mx-6">University of Colombo, School of Computing</h1>
            </div>i
          </div>
          <div className="columns" />
        </div>
      </section>
    );
}

export default About;