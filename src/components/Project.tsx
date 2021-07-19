import { FC } from 'react';
import { IProject } from '../@types/types';
import '../styles/Project.scss';

interface Props {
  project: IProject;
}

export const Project: FC<Props> = ({ project }) => {
  return (
    <div className="project">
      <div className="project__context">
        <div className="header">
          <span className="feature__line">Featured Project</span>
          <h1 className="project__name">{project.name}</h1>
        </div>
        <div className="description">
          <p>{project.description}</p>
        </div>
        <div className="techs">
          {project.techStacks?.split(',').map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
        <div className="links">
          <a href={project.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={project.link} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt"></i>
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
