import Navbar from "./Navbar";
import "../styles/Hero.css";

export default function Hero() {
    return(
        <div id="first-page">
            <Navbar />
            <section>
                <div className="container" id="hero-div">
                    <div id="hero-subdiv">
                        <div>
                            <p id="intro-p" className="links">Hello, my name is</p>
                            <h1>Joshua Ubani-Wokoma.</h1>
                            <h2 id="h2" style={{color: "rgba(255, 255, 255, 0.8)"}}>A Software Engineer.</h2>
                            <p id="interest-p">I am based in Nigeria. I have an interest in full-stack developement, algorithms, design, creative coding and everthing in between</p>
                        </div>
                        <div id="hero-cta-div">
                            <button id="project-cta">View Projects</button>
                            <button id="talk-cta">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}