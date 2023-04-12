import "../styles/Contact.css";

import message from "../assets/message.png";

export default function Contact() {
    return(
        <section id="contact-section">
            <div id="contact-div">
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
            </div>
        </section>
    )
}