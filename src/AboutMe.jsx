import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from './contexts/state.context';
import {
  mainTheme,
  primaryTheme,
  secondaryTheme,
  lightTheme,
} from './contexts/reducer';
// Statics
import './AboutMe.css';
// Variants
import {
  themeVariants,
  containerVariants,
  leftVariant,
  rightVariant,
} from './variants/AboutMe.variants';

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
          <h4>Hi, I'm Bineet Naidu</h4>

          <h6>#Personalise Your Themes</h6>

          <div className="theme">
            <motion.div
              whileHover={{ scale: 1.2 }}
              variants={themeVariants}
              onClick={() => dispatch({ type: 'SET_THEME', theme: lightTheme })}
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
            <p>
              I build new projects just to tickle my brain. I Love to help and
              Contribute to Open source Projects...
            </p>
            <div className="corner corner__br"></div>
            <div className="corner corner__bl"></div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(AboutMe);
