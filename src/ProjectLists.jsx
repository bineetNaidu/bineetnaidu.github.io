import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

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
      <h3 className="project__title">#Some of my Projects</h3>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="projectsLists"
      >
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </motion.div>
    </>
  );
};

export default ProjectLists;
