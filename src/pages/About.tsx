import React from 'react';
import { motion } from 'framer-motion';
import {
  containerVariant,
  aboutMeVariant,
  backdropVariant,
  tilemuskVariant,
} from '../variants/About.variants';

// Statics
import './About.css';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <motion.div
      variants={containerVariant}
      className="about"
      initial="initial"
      animate="animate"
    >
      <motion.div className="backdrop" variants={backdropVariant}></motion.div>
      <Header pageLinks="/works" page="Works" />
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
