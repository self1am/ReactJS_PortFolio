import React from "react";
import "./index.css";

import java from "../assets/img/java-logo-vert-blk.png";
import python from "../assets/img/Python-Symbol.png";
import c from "../assets/img/C_C_featuredimage.png";
import js from "../assets/img/machine-learning-libraries-javascript.png.webp";
import sql from "../assets/img/image2-1.png.webp";


function Portfolio(){
    return(
        <section className="hero is-fullheight is-fullheight-with-navbar" style={{backgroundColor: 'white'}} id="portfolio">
        <div className="hero-head mx-6">
          <div className="columns"><div className="column" /></div>
          <div className="columns">
            <div className="column is-1" />
            <div className="column is-6 mx-6"><h1 className="title is-1 is-light">Portfolio</h1></div>
          </div>
        </div>
        <div className="hero-body columns">
          <section className="column">
            <div className="card">
              <div className="card-content skills-content">
                <h3 className="title is-4">Skills</h3>
                <div className="content">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                        </p><figure className="image is-64x64">
                          <img src={java} />
                        </figure>
                        <progress className="progress is-link" value={90} max={100} />
                        <p />
                      </div>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                        </p><figure className="image is-96x96">
                          <img src={python} />
                        </figure>
                        <progress className="progress is-link" value={90} max={100} />
                        <p />
                      </div>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                        </p><figure className="image is-64x64">
                          <img src={c} />
                        </figure>
                        <progress className="progress is-link" value={75} max={100} />
                        <p />
                      </div>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                        </p><figure className="image is-64x64">
                          <img src={js} />
                        </figure>
                        <progress className="progress is-link" value={95} max={100} />
                        <p />
                      </div>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                        </p><figure className="image is-96x96">
                          <img src={sql} />
                        </figure>
                        <progress className="progress is-link" value={66} max={100} />
                        <p />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
}

export default Portfolio;