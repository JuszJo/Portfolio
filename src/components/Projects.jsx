import "../styles/Projects.css";

function Template1(props) {
    <div id="project1" className="projects">
        <img src="" alt="" />
        <div className="project-text-section">
            <h3></h3>
            <p></p>
            <p className="links"></p>
            <div className="source">
                <div className="github"></div>
                <div className="live"></div>
            </div>
        </div>
    </div>
}

function Template2(props) {
    <div id="project2" className="projects">
        <img src="" alt="" />
        <div className="project-text-section">
            <h3></h3>
            <p></p>
            <p className="links"></p>
            <div className="source">
                <div className="github"></div>
                <div className="live"></div>
            </div>
        </div>
    </div>
}

export default function Projects() {
    return (
        <section id="projects-section">
            <div className="container" id="projects-div">
                <h2>Things I've Built</h2>
                <div id="project-list">
                    <Template1 />
                    <Template2 />
                    <Template1 />
                    <Template2 />
                </div>
            </div>
        </section>
    )
}