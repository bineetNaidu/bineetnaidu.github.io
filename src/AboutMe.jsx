import React, { memo } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { useStateValue } from './contexts/state.context';
import { mainTheme, primaryTheme, secondaryTheme } from './contexts/reducer';
// Statics
import './AboutMe.css';

// Variants

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const leftVariant = {
  initial: { opacity: 0, x: '-50vw', height: 0, width: 0 },
  animate: {
    opacity: 1,
    x: '0',
    height: '100%',
    width: '100%',
  },
};

const rightVariant = {
  initial: { opacity: 0, x: '150vw', height: 0, width: 0 },
  animate: {
    opacity: 1,
    x: '0',
    height: '100%',
    width: '100%',
  },
};

const themeVariants = {
  initial: {
    y: '-20vh',
    opacity: 0,
  },
  animate: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.8 },
  },
};

const AboutMe = () => {
  // Contexts
  const [{ container }, dispatch] = useStateValue();
  return (
    <motion.div
      className="aboutMe"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={leftVariant} className="aboutMe__left">
        <img
          className="aboutMe__img"
          src="https://avatars0.githubusercontent.com/u/66471461?v=4"
          alt="Profile IMG"
        />
        <div className="aboutMe__prefs">
          <h4>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Bineet Naidu")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h4>

          <h6>#Personalise Your Themes</h6>

          <div className="theme">
            <motion.div
              whileHover={{ scale: 1.2 }}
              variants={themeVariants}
              className="theme__white"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              onClick={() => dispatch({ type: 'SET_THEME', theme: mainTheme })}
              variants={themeVariants}
              className="theme__dark"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              onClick={() =>
                dispatch({ type: 'SET_THEME', theme: secondaryTheme })
              }
              variants={themeVariants}
              className="theme__purple"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              variants={themeVariants}
              onClick={() =>
                dispatch({ type: 'SET_THEME', theme: primaryTheme })
              }
              className="theme__green"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={rightVariant} className="aboutMe__right">
        <div className="preview__shadow" style={{ background: container }}>
          <motion.div
            className="preview"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
          >
            <div className="corner corner__tl"></div>
            <div className="corner corner__tr"></div>
            <h3>About Me</h3>

            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(200)
                  .typeString(
                    'I build new projects just to tickle my brain. I Love to help and Contribute to Open source Projects...'
                  )
                  .changeDelay(2)
                  .start();
              }}
            />

            <div className="corner corner__br"></div>
            <div className="corner corner__bl"></div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(AboutMe);
