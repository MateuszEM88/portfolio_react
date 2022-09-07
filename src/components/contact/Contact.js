import React from "react";
import "./contact.css";
import whatsapp from "../contact/ico/whatsapp.png";
import messenger from "../contact/ico/messenger.png";
import github from "../contact/ico/github.png";
import linkedin from "../contact/ico/linkedin.png";
import email from "../contact/ico/email.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contactHeader">
        <h1>Contact</h1>
      </div>
      <div className="containerContact">
        <div className="communication">
          <h1 className="commHeader">Links</h1>
          <div className="linksContainer">
            <div className="linkDiv email">
              <img className="icons" src={email} alt="email icon" />
              <div className="contactDescription">
                <h4>E-mail</h4>
                <h3>panocek@gmail.com</h3>
              </div>
            </div>
            <div className="linkDiv whatsApp">
              <img className="icons" src={whatsapp} alt="whatsapp icon" />
              <div className="contactDescription">
                <h4>WhatsApp</h4>
                <h3>123-456-789</h3>
              </div>
            </div>
            <div className="linkDiv messenger">
              <img className="icons" src={messenger} alt="messenger icon" />
              <div className="contactDescription">
                <h4>Messenger</h4>
                <h3>Szalony Panocek</h3>
              </div>
            </div>
            <div className="linkDiv github">
              <img className="icons" src={github} alt="github icon" />
              <div className="contactDescription">
                <h4>Github</h4>
                <h3>www.github.com</h3>
              </div>
            </div>
            <div className="linkDiv linkedn">
              <img className="icons" src={linkedin} alt="linkedin icon" />
              <div className="contactDescription">
                <h4>Linkedin</h4>
                <h3>www.linkedin.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <h1 className="formHeader">Contact form</h1>
          <fieldset className="fieldset">
            <label className="labels" htmlFor="name">
              name
            </label>
            <input
              id="name"
              className="inputName"
              type="name"
              placeholder="your name"
            />
            <label className="labels" htmlFor="email">
              e-mail
            </label>
            <input id="email" className="inputEmail" type="email" />
            <label className="labels" htmlFor="question">
              question
            </label>
            <textarea id="question" className="message" type="text" />
            <button className="submitButton" type="submit">
              submit
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Contact;
