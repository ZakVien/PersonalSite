import React from "react";
import ProjectCardItem from "../components/ProjectCardItem";
import "../components/ProjectCards.css";

function ProjectCards(props) {
  const strippedTitle = props.title
    .replace(/[.,/#!$%^&*;:{}=\-_`~()']/g, "")
    .replace(/[" "]/g, "");

  return (
    <>
      <div className="project-cards__wrapper">
        <div className="project-cards__items">
          <ProjectCardItem
            id={strippedTitle}
            url={props.url == null ? "" : props.url}
            src={props.src}
            alt={props.alt}
            title={props.title}
            text={props.text}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
