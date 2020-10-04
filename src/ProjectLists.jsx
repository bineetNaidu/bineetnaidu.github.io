import React, { memo } from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

// Statics
import './ProjectLists.css';
import covid19 from './images/covid19.png';
import fb from './images/fb.png';
import firegram from './images/firegram.png';
import hulu from './images/hulu.png';
import instagram from './images/instagram.png';
import messenger from './images/messenger.png';
import netflixClone from './images/netflixClone.png';
import uiColors from './images/uiColors.png';
import yelpcamp from './images/yelpcamp.png';

// Variants

const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 2 },
    scale: 1,
  },
};

const ProjectLists = () => {
  return (
    <>
      <motion.h3
        initial={{ x: '-50vw', opacity: '0' }}
        animate={{ x: '0', opacity: '1', transition: { delay: 1.8 } }}
        className="project__title"
      >
        #Some of my Projects
      </motion.h3>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        layout
        className="projectsLists"
      >
        <Project
          image={netflixClone}
          github="https://github.com/bineetNaidu/netflix-clone"
          name="Netflix Clone"
          url="https://bineet-netflix-clone.netlify.app/"
        />
        <Project
          image={uiColors}
          url="https://ui-colors.netlify.app/"
          github="https://github.com/bineetNaidu/UI-Colors-App"
          name="UI Colors"
        />
        <Project
          image={covid19}
          url="https://bineet-covid19-tracker.netlify.app/"
          github="https://github.com/bineetNaidu/Covid19-Tracker"
          name="Covid19 Tracker"
        />
        <Project
          image={fb}
          url="https://facebook-clone-bd13e.web.app/"
          github="https://github.com/bineetNaidu/facebook-clone"
          name="Facebook Clone"
        />
        <Project
          image={hulu}
          url="https://bineet-hulu-clone.netlify.app/"
          name="Hulu Clone"
          github="https://github.com/bineetNaidu/hulu-clone"
        />
        <Project
          image={instagram}
          url="https://bineet-instagram-clone.web.app/"
          name="Instagram Clone"
          github="https://github.com/bineetNaidu/instagram-clone"
        />
        <Project
          image={firegram}
          url="https://firegram-82050.web.app/"
          github="https://github.com/bineetNaidu/firegram"
          name="Firegram"
        />
        <Project
          image={messenger}
          url="https://messenger-clone-edd60.web.app/"
          github="https://github.com/bineetNaidu/messenger-clone"
          name="Messenger Clone"
        />
        <Project
          image={yelpcamp}
          url="https://bineetsyelpcamp.herokuapp.com/"
          name="YelpCamp"
          github="https://github.com/bineetNaidu/YelpCamp"
        />
      </motion.div>
    </>
  );
};

export default memo(ProjectLists);
