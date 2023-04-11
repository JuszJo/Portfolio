import "../styles/Projects.css";

const project = [
    {
        index: 1,
        image: undefined,
        title: "Space Tour",
        description: "",
        stack: ["React", "HTML&CSS"]
    },

    {
        index: 2,
        image: undefined,
        title: "Product Page",
        description: "",
        stack: ["React" , "HTML&CSS"]
    },

    {
        index: 3,
        image: undefined,
        title: "Pathfinding Visualizer",
        description: "",
        stack: ["Vanilla Javascript", "HTML&CSS"]
    },

    {
        index: 4,
        image: undefined,
        title: "Word of Web Clone",
        description: "",
        stack: ["HTML&CSS"]
    },
]

function Template1({ details }) {
    return (
        <div id="project1" className="projects">
            <img src="" alt="" />
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

function Template2({ details }) {
    return (
        <div id="project2" className="projects">
            <img src="" alt="" />
            <div className="project-text-section">
                <h3 className="project-title">{details.title}</h3>
                <p className="project-description">{details.description}</p>
                <div className="stack-div">
                    {details.stack.map((value, index) => {
                        return <span key={details.index} className="links stack">{value}</span>
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
                    <Template1 details={project[0]} />
                    <Template2 details={project[1]} />
                    <Template1 details={project[2]} />
                    <Template2 details={project[3]} />
                </div>
            </div>
        </section>
    )
}