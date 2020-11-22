import React from 'react';
import Project from '../components/Project';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
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
    <motion.div layout className="works">
      {docs.length > 0 &&
        docs.map((p: ProjectInterfaces) => (
          <Project
            description="Deign + UI + ux"
            idx={1}
            name={p.name}
            link={p.link}
            image={p.url}
          />
        ))}
    </motion.div>
  );
};

export default Works;
