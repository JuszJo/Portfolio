import "../styles/Contact.css";

import message from "../assets/message.png";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.png";

export default function Contact() {
    return(
        <section id="contact-section">
            <div id="contact-div" className="container">
                <h2>Say Hello</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                </p>
                <button>
                    <img src={message} alt=""/>
                    <a>Message</a>
                </button>
                <div id="socials-div">
                    <div className="socials">
                        <img src={linkedin} alt="" />
                        <a href="">LinkedIn</a>
                    </div>
                    <div className="socials">
                        <img src={twitter} alt="" />
                        <a href="">Twitter</a>
                    </div>
                    <div className="socials">
                        <img id="footer-github-image" src={github} alt="" />
                        <a href="">Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}