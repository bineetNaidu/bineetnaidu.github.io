import React from 'react';
import Project from '../components/Project';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { ProjectTypes } from '../types';
// Statics
import './Works.css';

const Works: React.FC = () => {
  const { docs } = useFirestore('projects');
  return (
    <motion.div layout className="works">
      {docs.length > 0 &&
        docs.map((p: ProjectTypes) => (
          <Project
            description="Deign + UI + ux"
            idx={1}
            name={p.name}
            link={p.link}
            url={p.url}
          />
        ))}
    </motion.div>
  );
};

export default Works;
