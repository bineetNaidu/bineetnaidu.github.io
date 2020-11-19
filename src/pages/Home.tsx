import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';

// Statics
import circleSvg from '../assets/circle.svg';
import lineSvg from '../assets/line-bars.svg';
import './Home.css';

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const wrapperVariant = {
  initial: {
    y: '4vh',
  },
  animate: {
    y: 0,
    transition: { delay: 0.1 },
  },
};

const brandVariant = {
  initial: {
    opacity: 0,
    y: '-10vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 },
  },
};

const navigationVariant1 = {
  initial: {
    opacity: 0,
    x: '-10vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 },
  },
};

const navigationVariant2 = {
  initial: {
    opacity: 0,
    x: '10vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 },
  },
};

const Home: React.FC = () => {
  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="home__container" variants={wrapperVariant}>
        <motion.div variants={navigationVariant1} className="home__navigation1">
          <NavigationBar label="About" link="/about" />
        </motion.div>
        <motion.div variants={navigationVariant2} className="home__navigation2">
          <NavigationBar label="Works" link="/works" direction="invert" />
        </motion.div>

        <motion.h1 variants={brandVariant} className="home__brand">
          Bineet Naidu
        </motion.h1>
        <div className="home__images">
          <img src={circleSvg} alt="circle svg" width="100%" height="100%" />
          <img src={lineSvg} alt="line bar svg" width="100%" height="100%" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
