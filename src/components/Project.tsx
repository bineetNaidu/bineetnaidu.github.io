import React from 'react';
import { motion } from 'framer-motion';
// Statics
import './Project.css';
import {
  containerVariant,
  backdropVariant,
  projectIdxVariant,
} from '../variants/Works.variants';

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
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="animate"
      className="project"
    >
      {/* <motion.div variants={backdropVariant} className=""></motion.div> */}
      <div className="project__media">
        <div className="project__name--backdrop">
          <h1 className="project__name">{name}</h1>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className="projectTile__metaData">
        <p className="project__details">{description}</p>
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.7}
          className="project__link"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
          }}
        >
          <a href={link}>VIEW PROJECT</a>
        </motion.div>
      </div>
      <motion.div variants={projectIdxVariant} className="projectTile__idx">
        <h1>0{idx}</h1>
      </motion.div>
    </motion.div>
  );
};

export default ProjectTile;
