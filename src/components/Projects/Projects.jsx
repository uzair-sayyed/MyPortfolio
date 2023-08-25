import React from "react";
import "./Projects.css";
// import ProjectCard from "./ProjectCard";
import Cards from "./Cards";
function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className='projects-heading'>
        <h2 className='heading-title'>Projects/Experience</h2>
        <p>Things I’ve built so far</p>
      </div>
      <div className='projects-cards'>
        <Cards />
      </div>
    </section>
  );
}

export default Projects;
