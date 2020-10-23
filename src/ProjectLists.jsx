import React, { memo } from 'react';
import Project from './Project';
import { motion } from 'framer-motion';
import { projects } from './data/projects.data';

// Statics
import './ProjectLists.css';

// Variants

const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 2 },
    scale: 1,
  },
};

const ProjectLists = () => {
  return (
    <>
      <motion.h3
        initial={{ x: '-50vw', opacity: '0' }}
        animate={{ x: '0', opacity: '1', transition: { delay: 1.8 } }}
        className="project__title"
      >
        #Some of my Projects
      </motion.h3>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        layout
        className="projectsLists"
      >
        {projects.map((p) => (
          <Project
            key={p.name}
            image={p.image}
            github={p.github}
            name={p.name}
            url={p.url}
          />
        ))}
      </motion.div>
    </>
  );
};

export default memo(ProjectLists);
