import React from "react";
import "./badges.css";

import ccna from "../assets/img/CCNA-Certification-Logo.jpg";
import comptia from "../assets/img/COMPTIA-A.png";
import ccnp from "../assets/img/ccnp.png";
import ceh from "../assets/img/maxresdefault.jpg";

function Badges(){
    return(
        <section className="section" style={{backgroundColor : '#1E1E1E'}}>
        <div className="container">
          <h1 className="title" style={{color: 'beige'}}>Certificates and Badges</h1>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-5by4">
                    <img src={ccna} alt="Project 1" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">CCNA</p>
                      <p className="subtitle is-6">Networking Certification</p>
                    </div>
                  </div>
                  <div className="content">
                    Cisco Certified Network Adminstrator
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-5by4">
                    <img src={comptia} alt="Project 2" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">COMPTIA-A</p>
                      <p className="subtitle is-6">Web Development</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-5by4">
                      <img src={ccnp} alt="Project 1" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">CCNP</p>
                        <p className="subtitle is-6">Professional Certification</p>
                      </div>
                    </div>
                    <div className="content">
                      Cisco Certified Network Personnel
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-5by4">
                      <img src={ceh} alt="Project 2" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">CEH | V11</p>
                        <p className="subtitle is-6">Ethical Hacking Certification</p>
                      </div>
                    </div>
                    <div className="content">
                      Certified Ethical Hacker. Fundamentals of pentesting and linux
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div></section>
    );
}

export default Badges;