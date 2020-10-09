import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Statics
import './TechStacks.css';

const containerVariant = {
  initial: {
    x: '-100vh',
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const imgVariants = {
  initial: {
    x: '-100vh',
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const TechStacks = () => {
  return (
    <motion.div
      className="techs"
      variants={containerVariant}
      initial="initial"
      animate="animate"
    >
      <h3>#Techs that I Use</h3>

      <div className="techs__lists">
        <motion.img
          variants={imgVariants}
          className="techs__img"
          alt="JavaScript"
          title="JavaScript"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        />
        <motion.img
          className="techs__img"
          alt="TypeScript"
          title="TypeScript"
          variants={imgVariants}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
        />
        <motion.img
          className="techs__img"
          alt="React"
          variants={imgVariants}
          title="ReactJs"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        />
        <motion.img
          className="techs__img"
          alt="Redux"
          variants={imgVariants}
          title="Redux"
          src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
        />
        <motion.img
          className="techs__img"
          alt="html5"
          title="HTML"
          variants={imgVariants}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
        />
        <motion.img
          className="techs__img"
          alt="MongoDB"
          title="MongoDB"
          variants={imgVariants}
          src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
        />
        <motion.img
          className="techs__img"
          alt="ExpressJS"
          title="ExpressJs"
          variants={imgVariants}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
        />
        <motion.img
          className="techs__img"
          alt="CSS3"
          variants={imgVariants}
          title="CSS3"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
        />
        <motion.img
          className="techs__img"
          alt="sass"
          title="SASS"
          variants={imgVariants}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
        />
        <motion.img
          className="techs__img"
          alt="git"
          title="Git"
          variants={imgVariants}
          src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
        />
        <motion.img
          className="techs__img"
          alt="GitHub"
          title="GitHub"
          src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
        />
        <motion.img
          className="techs__img"
          alt="bash"
          title="DevOps"
          variants={imgVariants}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
        />
          <motion.img
          className="techs__img"
          alt="NodeJs"
          title="NodeJs"
          variants={imgVariants}
          src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
        />
          <motion.img
          className="techs__img"
          alt="GCP"
          title="GCP"
          variants={imgVariants}
          src="https://profilinator.rishav.dev/skills-assets/google_cloud-icon.svg"
        />
      </div>
    </motion.div>
  );
};

export default memo(TechStacks);
