import "../styles/Projects.css";

import project3 from "../assets/proj3.png";
import project6 from "../assets/proj6.webp"
import project11 from "../assets/proj11.webp";

import project13 from "../assets/proj13.webp";
import project14 from "../assets/proj14.webp";

import github from "../assets/github.png";

const project = [
    {
        image: project14,
        title: "Quaga | Mobile App",
        description: "The Quaga mobile app puts the essentials of property management in your pocket. Manage tenants, mark up maintenance requests, share documents easily and so much more, wherever you are. Developed for Quaga Global LTD.",
        stack: ["React Native", "Expo", "Typescript", "Node.js", "MongoDB"],
        site: "https://apps.apple.com/ng/app/quaga/id6748447263",
        appStore: true
    },
    {
        image: project11,
        title: "Quaga | Web App",
        description: "Quaga is a full-featured property management platform built for landlords, property managers, and letting agents. It streamlines rental operations by combining essential tools into a single, easy-to-use web application. Developed for Quaga Global LTD.",
        stack: ["React", "Typescript", "Node.js", "Redis", "MongoDB"],
        site: "https://quagapro.com"
    },
    {
        image: project13,
        title: "Purity Healthcare",
        description: "Designed and developed a landing page for a health care provider which showcases the services provided, testimonials and contact details.",
        stack: ["HTML", "CSS"],
        site: "https://purityhealthcare.com/"
    },
    {
        image: project6,
        title: "Spotify Artist Search",
        description: "A Website that enables users to search for their favourite artist using the Spotify API and returns information about said artist.",
        stack: ["Node.js", "EJS", "Javascript"],
        github: "https://github.com/JuszJo/music-spotify",
        site: "https://joshua-spotify-search.onrender.com"
    },
    {
        image: project3,
        title: "Pathfinding Visualizer",
        description: "A Website that visualizes the process of Breadth First Search and how it navigates its way to locate specific nodes in a graph. built with vanilla javascript(no canvas e.t.c).",
        stack: ["Vanilla Javascript", "HTML&CSS", "Algorithms"],
        github: "https://github.com/JuszJo/shortest-path",
        site: "https://juszjo.github.io/graph"
    },
]

function Template({ details, index }) {
    return (
        <div id={`project${index + 1}`} className={index % 2 != 0 ? "projects2" : "projects1"}>
            <div className={index % 2 != 0 ? "border2" : "border1"}></div>
            <a className="image-links" href={details.site} target="_blank" rel="norefferer">
                <div className="image-wrapper">
                    <img className="project-image" src={details.image} alt="projects done" />
                </div>
            </a>
            <div className="project-text-section">
                <h5 className="links">Featured Project</h5>
                <h3 className="project-title">{details.title}</h3>
                <p className="project-description">{details.description}</p>
                <div className={index % 2 != 0 ? "stack-div2" : "stack-div1"}>
                    {details.stack.map((value, index) => <span key={index} className="links stack">{value}</span>)}
                </div>
                <div className={index % 2 != 0 ? "source2" : "source1"}>
                    {details.github && <div className={index % 2 != 0 ? "github2" : "github1"}>
                        <img src={github} alt="github icon" />
                        <a href={details.github} target="_blank" style={{fontSize: "1.2rem", color: "var(--text-opacity)"}}>Github</a>
                    </div>}
                    <div className="live">
                        <a href={details.site} target="_blank" style={{fontSize: "1.2rem", color: "var(--text-opacity)"}}>{details.appStore ? "App Store" : "Live Site"}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects-section">
            <div className="container" id="projects-div">
                <h2>Things I've Built</h2>
                <div id="project-list">
                    {project.map((value, index) => <Template key={index} details={value} index={index} />)}
                </div>
                <div>
                    <div id="other-projects-div">
                        <h2>View my other projects</h2>
                        <div id="github">
                            <img src={github} />
                            <a style={{fontSize: "1.2rem", color: "var(--text-opacity)"}} href="https://github.com/JuszJo">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}