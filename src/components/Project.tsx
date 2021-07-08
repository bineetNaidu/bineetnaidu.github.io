import { FC } from 'react';
import { IProject } from '../@types/types';
import '../styles/Project.scss';

interface Props {
  project: IProject;
  flip: boolean;
}

export const Project: FC<Props> = ({ project, flip }) => {
  return (
    <div
      className="project"
      style={{ flexDirection: flip ? 'row-reverse' : 'row' }}
    >
      <div className="project__context">
        <div className="header">
          <span className="feature__line">Featured Project</span>
          <h1 className="project__name">{project.name}</h1>
        </div>
        <div className="description">
          <p>{project.description}</p>
        </div>
        <div className="techs">
          <span>Next.js</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>
        <div className="links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.link} target="_blank" rel="noreferrer">
            Web
          </a>
        </div>
      </div>
      <div className="project__image">
        <div className="img">
          <img src={project.url} alt={project.name + ' image'} />
        </div>
      </div>
    </div>
  );
};
