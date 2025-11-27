import { createContext, useContext } from "react"

import github from "../../assets/github.png";

const ProjectCardContext = createContext(null);

function ProjectCardWrapper({ children }) {
  const { reversed } = useContext(ProjectCardContext);

  return (
    <div
      className={reversed ? "projects2" : "projects1"}
    >
      {children}
    </div>
  )
}

function ProjectCardBorder() {
  const { reversed } = useContext(ProjectCardContext);

  return (
    <div className={reversed ? "border2" : "border1"}></div>
  )
}

function ProjectCardImage() {
  const { project } = useContext(ProjectCardContext);

  return (
    <a
      className="image-links"
      href={project.site}
      target="_blank"
      rel="norefferer"
    >
      <div className="image-wrapper">
        <img className="project-image" src={project.image} alt="projects done" />
      </div>
    </a>
  )
}

function ProjectCardContent({ children }) {
  return (
    <div className="project-text-section">
      <h5 className="links">Featured Project</h5>
      {children}
    </div>
  )
}


function ProjectCardTitle() {
  const { project } = useContext(ProjectCardContext);

  return (
    <h3 className="project-title">{project.title}</h3>
  )
}

function ProjectCardDescription() {
  const { project } = useContext(ProjectCardContext);

  return (
    <p className="project-description">{project.description}</p>
  )
}

function ProjectCardStack() {
  const { project, reversed } = useContext(ProjectCardContext);

  return (
    <div className={reversed ? "stack-div2" : "stack-div1"}>
      {project.stack.map((value, index) => (
        <span key={index} className="links stack">{value}</span>)
      )}
    </div>
  )
}

function ProjectCardGithub() {
  const { project, reversed } = useContext(ProjectCardContext);

  return (
    <div className={reversed ? "github2" : "github1"}>
      <img src={github} alt="github icon" className="github-img" />
      <a href={project.links.github} className="source-text" target="_blank" style={{ color: "var(--text-opacity)" }}>Github</a>
    </div>
  )
}

function ProjectCardLive() {
  const { project } = useContext(ProjectCardContext);

  return (
    <div className="live">
      <a href={project.site}
        target="_blank"
        style={{ color: "var(--text-opacity)" }}
        className="source-text"
      >
        {project.links.appStore ? "App Store" : "Live Site"}
      </a>
    </div>
  )
}

function ProjectCardSources() {
  const { project, reversed } = useContext(ProjectCardContext);

  return (
    <div className={reversed ? "source2" : "source1"}>
      {project.links.github && <ProjectCardGithub />}
      <ProjectCardLive />
    </div>
  )
}

export default function ProjectCard({ project, reversed }) {

  return (
    <ProjectCardContext.Provider value={{ project, reversed }}>
      <ProjectCardWrapper>
        <ProjectCardBorder />
        <ProjectCardImage />
        <ProjectCardContent>
          <ProjectCardTitle />
          <ProjectCardDescription />
          <ProjectCardStack />
          <ProjectCardSources />
        </ProjectCardContent>
      </ProjectCardWrapper>
    </ProjectCardContext.Provider>
  )
}