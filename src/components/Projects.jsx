import "../styles/Projects.css";

import project3 from "../assets/proj3.png";
import project6 from "../assets/proj6.webp"
import project11 from "../assets/proj11.webp";

import project13 from "../assets/proj13.webp";
import project14 from "../assets/proj14.webp";

import github from "../assets/github.png";
import ProjectCard from "./ui/ProjectCard";

const project = [
  {
    image: project14,
    title: "Quaga | Mobile App",
    description: "The Quaga mobile app puts the essentials of property management in your pocket. Manage tenants, mark up maintenance requests, share documents easily and so much more, wherever you are. Developed for Quaga Global LTD.",
    stack: ["React Native", "Expo", "Typescript", "Node.js", "MongoDB"],
    site: "https://apps.apple.com/ng/app/quaga/id6748447263",
    links: {
      appStore: "https://apps.apple.com/ng/app/quaga/id6748447263"
    }
  },
  /* {
      image: project11,
      title: "Quaga | Web App",
      description: "Quaga is a full-featured property management platform built for landlords, property managers, and letting agents. It streamlines rental operations by combining essential tools into a single, easy-to-use web application. Developed for Quaga Global LTD.",
      stack: ["React", "Typescript", "Node.js", "Redis", "MongoDB"],
      site: "https://quagapro.com",
      links: {
        site: "https://quagapro.com"
      }
  }, */
  {
    image: project13,
    title: "Purity Healthcare",
    description: "Designed and developed a landing page for a health care provider which showcases the services provided, testimonials and contact details.",
    stack: ["HTML", "CSS"],
    site: "https://purityhealthcare.com/",
    links: {
      site: "https://purityhealthcare.com/"
    }
  },
  {
    image: project3,
    title: "Pathfinding Visualizer",
    description: "A Website that visualizes the process of Breadth First Search and how it navigates its way to locate specific nodes in a graph. built with vanilla javascript(no canvas e.t.c).",
    stack: ["Vanilla Javascript", "HTML&CSS", "Algorithms"],
    site: "https://juszjo.github.io/graph",
    links: {
      site: "https://juszjo.github.io/graph",
      github: "https://github.com/JuszJo/shortest-path",
    }
  },
]

export default function Projects() {
  return (
    <section id="projects-section">
      <div className="container" id="projects-div">
        <h2>Things I've Built</h2>
        <div id="project-list">
          {project.map((value, index) => <ProjectCard project={value} reversed={index % 2 != 0} key={index} />)}
        </div>
        <div>
          <div id="other-projects-div">
            <h2>View my other projects</h2>
            <div id="github">
              <img src={github} style={{ width: 20, height: 20 }} />
              <a style={{ fontSize: "1.2rem", color: "var(--text-opacity)" }} href="https://github.com/JuszJo">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}