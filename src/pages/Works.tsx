import React from 'react';
import Project from '../components/Project';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { ProjectTypes } from '../types';
// Statics
import './Works.css';
import Header from '../components/Header';

const Works: React.FC = () => {
  const { docs } = useFirestore('projects');
  return (
    <div className="works">
      <Header pageLinks="/about" page="About" />
      <motion.div layout>
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
    </div>
  );
};

export default Works;
