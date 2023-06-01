import React from "react";
import PageviewIcon from "@mui/icons-material/Pageview";
import { GitHub } from "@mui/icons-material";

export const Projects = ({ name, desc, frames, link, git, photo }) => {
  return (
    <>
      <div className="info">
        <div className="project_title">{name}</div>

        <div className="frames">{frames}</div>

        <div className="divider"></div>
        <div className="desc">{desc}</div>

        <div className="icons">
          <div className="eye">
            <a
              href={link}
              title="Visit Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PageviewIcon sx={{ fontSize: 30 }} />
            </a>
          </div>

          <div className="git">
            <a
              href={git}
              title="View Code On Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
      <div className="photo">
        <img src={photo} alt="" />
      </div>
    </>
  );
};
