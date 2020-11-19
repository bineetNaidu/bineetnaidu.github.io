import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Statics
import './About.css';

const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const headerVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: 'calc(100vw - 25vw)',
    transition: { delay: 1, duration: 1.2 },
  },
};

const tilemuskVariant = {
  initial: {
    opacity: 0,
    y: '-20vh',
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.6, duration: 0.8 },
  },
};

const backdropVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-200vw',
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const aboutMeVariant = {
  initial: {
    y: '55vh',
  },
  animate: {
    y: 0,
    transition: { delay: 1.6, duration: 0.8 },
  },
};

const About: React.FC = () => {
  return (
    <motion.div
      variants={containerVariant}
      className="about"
      initial="initial"
      animate="animate"
    >
      <motion.div className="backdrop" variants={backdropVariant}></motion.div>
      <motion.div variants={headerVariant} className="about__header">
        <Link to="/" className="about__header--brand">
          Bineet Naidu
        </Link>
        <Link to="/works" className="about__header--workLink">
          Works
        </Link>
      </motion.div>

      <div className="about__content">
        <motion.span variants={tilemuskVariant} className="about__tileMusk">
          Forget safety,
        </motion.span>
        <motion.span variants={tilemuskVariant} className="about__tileMusk">
          be notorious.
        </motion.span>
        <motion.span variants={tilemuskVariant} className="about__tileMusk">
          You Break Stuff,
        </motion.span>
        <motion.span variants={tilemuskVariant} className="about__tileMusk">
          And I make stuff
        </motion.span>
      </div>

      <motion.div variants={aboutMeVariant} className="about__me">
        <p>
          I build new projects just to tickle my brain. I Love to help and
          Contribute to Open source Projects...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
