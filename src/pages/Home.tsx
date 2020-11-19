import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';

// Statics
import circleSvg from '../assets/circle.svg';
import lineSvg from '../assets/line-bars.svg';
import './Home.css';

const Home: React.FC = () => {
  return (
    <motion.div className="home">
      <div className="home__container">
        <div className="home__navigation1">
          <NavigationBar label="About" link="/about" />
        </div>
        <div className="home__navigation2">
          <NavigationBar label="Works" link="/works" direction="invert" />
        </div>

        <h1 className="home__brand">Bineet Naidu</h1>
        <div className="home__images">
          <img src={circleSvg} alt="circle svg" width="100%" height="100%" />
          <img src={lineSvg} alt="line bar svg" width="100%" height="100%" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
