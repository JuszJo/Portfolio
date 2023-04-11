import "../styles/Projects.css";

import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";

const project = [
    {
        index: 1,
        reverse: false,
        image: project1,
        title: "Space Tour",
        description: "",
        stack: ["React", "HTML&CSS"]
    },

    {
        index: 2,
        reverse: true,
        image: project2,
        title: "Product Page",
        description: "",
        stack: ["React" , "HTML&CSS"]
    },

    {
        index: 3,
        reverse: false,
        image: project3,
        title: "Pathfinding Visualizer",
        description: "",
        stack: ["Vanilla Javascript", "HTML&CSS"]
    },

    {
        index: 4,
        reverse: true,
        image: project4,
        title: "Word of Web Clone",
        description: "",
        stack: ["HTML&CSS"]
    },
]

function Template({ details }) {
    return (
        <div className={details.reverse ? "projects2" : "projects1"}>
            <div className={details.reverse ? "border2" : "border1"}></div>
            <img className="project-image" width={600} src={details.image} alt="" />
            <div className="project-text-section">
                <h3 className="project-title">{details.title}</h3>
                <p className="project-description">{details.description}</p>
                <div className="stack-div">
                    {details.stack.map((value, index) => {
                        return <span key={index} className="links stack">{value}</span>
                    })}
                </div>
                <div className="source">
                    <div className="github"></div>
                    <div className="live"></div>
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
                    <Template details={project[0]} />
                    <Template details={project[1]} />
                    <Template details={project[2]} />
                    <Template details={project[3]} />
                </div>
            </div>
        </section>
    )
}