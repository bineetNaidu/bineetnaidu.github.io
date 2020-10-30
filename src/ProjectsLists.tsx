import React, { memo } from 'react';
import Project from './Project';
import { motion } from 'framer-motion';
import useFirestore from './hooks/useFirestore';
// Statics
import './ProjectLists.css';
// Variants
import { containerVariants } from './variants/projectList.variants';

interface ProjectInterfaces {
  id: string;
  name: string;
  url: string;
  link: string;
  github: string;
}

const ProjectLists: React.FC = () => {
  const { docs } = useFirestore('projects');
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
        {docs.map((p: ProjectInterfaces) => (
          <Project
            key={p.id}
            image={p.url}
            github={p.github}
            name={p.name}
            url={p.link}
          />
        ))}
      </motion.div>
    </>
  );
};
export default memo(ProjectLists);
