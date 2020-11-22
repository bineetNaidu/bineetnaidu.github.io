import React from 'react';
import ProjectTile from '../components/ProjectTile';
import useFirestore from '../hooks/useFirestore';
// Statics
import './Works.css';
interface ProjectInterfaces {
  id: string;
  name: string;
  url: string;
  link: string;
  github: string;
}

const Works: React.FC = () => {
  const { docs } = useFirestore('projects');
  return (
    <div className="works">
      {docs.length > 0 &&
        docs.map((p: ProjectInterfaces) => (
          <ProjectTile
            description="Deign + UI + ux"
            idx={1}
            name={p.name}
            link={p.link}
            image={p.url}
          />
        ))}
    </div>
  );
};

export default Works;
