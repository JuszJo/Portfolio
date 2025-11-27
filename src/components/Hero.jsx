import Navbar from "./Navbar";
import "../styles/Hero.css";

import message from "../assets/message.png";
import { ArrowDown, MessageSquareText } from "lucide-react";

export default function Hero() {
  return (
    <div id="first-page">
      <Navbar />
      <section>
        <div className="container" id="hero-div">
          <div id="hero-subdiv">
            <div>
              <p id="intro-p" className="links">Hello, my name is</p>
              <h1>Joshua Ubani-Wokoma.</h1>
              <h2 id="h2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>A Software Engineer.</h2>
              <p id="interest-p">I build both web and mobile products that feel straightforward and useful.</p>
            </div>
            <div id="hero-cta-div">
              <a href="#projects-section">
                <button id="project-cta">
                  <ArrowDown id="arrow" size={16} stroke="var(--secondary)" />
                  {/* <img id="arrow" src={arrow} /> */}
                  View Projects
                </button>
              </a>
              <a href="#contact-section">
                <button id="talk-cta">
                  {/* <img src={message} id="message-icon" /> */}
                  <MessageSquareText id="message-icon" size={14} stroke="var(--secondary)" />
                  Let's Talk
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}