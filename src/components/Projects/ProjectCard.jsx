import React from "react";
import "./ProjectCard.css";
import { AiOutlineLink } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCards(props) {
  return (
    <div className='card'>
      <div className='image'>
        <img src={props.data.image} />
      </div>
      <div className='content'>
        <h3>{props.data.title}</h3>
        <p className='projects-details'>{props.data.description}</p>
        <p className='projects-tools'>
          Tech stack :<span> {props.data.techStack} </span>
        </p>
        <div className='projects-link'>
          <p>
            <span>
              <AiOutlineLink className='project-link-icon' />
            </span>
            <span>
              <a href={props.data.livePreview}>Live Preview</a>
            </span>
          </p>
          <p>
            <span>
              <AiFillGithub className='project-link-icon' />
            </span>
            <span>
              <a href={props.data.github}>View Code</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
