import React from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';

// Statics
import './Project.css';

const Project = () => {
  return (
    <motion.div layout className="project">
      <div className="project__info">
        <h4>Netflix Clone</h4>
        <div className="project__details">
          <a href="#">
            <LinkIcon />
          </a>
          <a href="#">
            <CodeIcon />
          </a>
        </div>
      </div>
      <motion.img
        whileHover={{ scale: 1.15 }}
        className="project__image"
        src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="project's screenshot"
      />
    </motion.div>
  );
};

export default Project;
