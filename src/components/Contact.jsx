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
                    Have some work you need done?, hit that message button or contact me through
                    any of the social links below, I would love to hear from you.
                </p>
                <a id="mail" href="mailto:joshubaniwokoma@gmail.com">
                    <img id="mail-icon" src={message} alt=""/>
                    <p>Message</p>
                </a>
                <div id="socials-div">
                    <div className="socials">
                        <img src={linkedin} alt="" />
                        <a target="_blank" href="https://www.linkedin.com/in/joshua-ubani-wokoma-560098227/">LinkedIn</a>
                    </div>
                    <div className="socials">
                        <img src={twitter} alt="" />
                        <a target="_blank" href="https://twitter.com/jo_codes">Twitter</a>
                    </div>
                    <div className="socials">
                        <img id="footer-github-image" src={github} alt="" />
                        <a target="_blank" href="https://github.com/JuszJo">Github</a>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <a>Designed and Built by Joshua Ubani-Wokoma</a>
                </div>
            </footer>
        </section>
    )
}