import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';
import {
  containerVariants,
  wrapperVariant,
  brandVariant,
  navigationVariant1,
  navigationVariant2,
} from '../variants/Home.variants';

// Statics
import circleSvg from '../assets/circle.svg';
import lineSvg from '../assets/line-bars.svg';
import './Home.css';

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
