import React from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';

// Statics
import './Project.css';

const Project = ({ name, github, url, image }) => {
  return (
    <motion.div layout className="project">
      <div className="project__info">
        <h4>{name}</h4>
        <div className="project__details">
          <a href={url}>
            <LinkIcon />
          </a>
          <a href={github}>
            <CodeIcon />
          </a>
        </div>
      </div>
      <motion.img
        whileHover={{ scale: 1.15 }}
        className="project__image"
        src={image}
        alt={`${name}'s project's screenshot`}
      />
    </motion.div>
  );
};

export default Project;
