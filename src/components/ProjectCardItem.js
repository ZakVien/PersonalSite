import React from "react";
import "../../node_modules/video-react/dist/video-react.css";

function ProjectCardItem(props) {
  let embedVideo = false;

  if (props.title === "Badger Earth Tools") {
    embedVideo = true;
  }

  return (
    <>
      <li className="project-cards__item" id={props.id}>
        <figure className="project-cards__item__pic-wrap">
          <img
            src={props.src}
            alt={props.alt}
            className="project-cards__item__img"
          />
        </figure>
        <div className="project-cards__item__info">
          <div className="project-cards__item__title">
            <h3>{props.title}</h3>
          </div>
          <div className="project-cards__item__text">
            <p>{props.text}</p>
            {props.url.length > 0 && (
              <>
                <br />
                <a
                  href={props.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-external__link"
                >
                  Visit {props.title}
                </a>
              </>
            )}
            {embedVideo && (
              <>
                <br />
                <p>
                  <a href="https://youtu.be/N9F1uSjXHb0">
                    Check out a walkthrough
                  </a>{" "}
                  of the work I completed prior to completion.
                </p>
              </>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default ProjectCardItem;
