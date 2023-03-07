import React from "react";
import About from "../about";
import "./index.css";

function Contact(){
    return(
        <section className="section is-fullheight is-fullheight-with-navbar" id="contact" style={{backgroundColor: 'black'}}>
        <div className="hero-head" />
        <div className="container">
          <div className="section-heading">
            <h3 className="title is-2" style={{color: 'beige'}}>Contact</h3>
            <h4 className="subtitle is-5">Get in touch</h4>
          </div>
          <br />
          <div className="columns hero-body">
            <div className="column is-6 is-offset-3">
              <div className="box">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input className="input" type="email" placeholder="Email" defaultValue="" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="field is-grouped has-text-centered">
                  <div className="control">
                    <button className="button is-link is-large"><span className="icon">
                        <i className="fas fa-envelope" />
                      </span>
                      <span>Submit</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot" />
      </section>
    );
}

export default Contact;