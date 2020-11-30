import React from 'react';
import { motion } from 'framer-motion';
import {
  containerVariant,
  aboutMeVariant,
  backdropVariant,
  tilemuskVariant,
  imgVariants as techVariant,
} from '../variants/About.variants';
import Header from '../components/Header';
import useFirestore from '../hooks/useFirestore';
import { Techs } from '../types';

// Statics
import './About.css';

const About: React.FC = () => {
  const { docs } = useFirestore('techs');
  return (
    <motion.div
      variants={containerVariant}
      className="about"
      initial="initial"
      animate="animate"
    >
      <motion.div className="backdrop" variants={backdropVariant}></motion.div>
      <Header pageLinks="/works" page="Works" />
      <div>
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
      </div>

      <div className="about__techs">
        {docs.map((t: Techs) => (
          <motion.div
            className="about__techItem"
            variants={techVariant}
            key={t.id}
          >
            <img
              className="about__techImg"
              alt={t.name}
              title={t.name}
              src={t.image}
            />
            <h4>{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
