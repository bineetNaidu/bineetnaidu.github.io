import React from 'react';
// Statics
import './Project.css';

interface Props {
  idx: number;
  link: string;
  name: string;
  image: string;
  description: string;
}

const ProjectTile: React.FC<Props> = ({
  description,
  idx,
  image,
  link,
  name,
}) => {
  return (
    <div className="project">
      <div className="project__media">
        <div className="project__name--backdrop">
          <h1 className="project__name">{name}</h1>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className="projectTile__metaData">
        <p className="project__details">{description}</p>
        <div className="project__link">
          <a href={link}>VIEW PROJECT</a>
        </div>
      </div>
      <div className="projectTile__idx">
        <h1>0{idx}</h1>
      </div>
    </div>
  );
};

export default ProjectTile;
