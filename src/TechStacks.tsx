import React, { memo } from 'react';
import { motion } from 'framer-motion';
// Statics
import './TechStacks.css';
import { containerVariant, imgVariants } from './variants/TechStacks.variants';

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
        {/* {techs.map((t) => (
          <motion.img
            key={t.name}
            variants={imgVariants}
            className="techs__img"
            alt={t.name}
            title={t.name}
            src={t.src}
          />
        ))} */}
      </div>
    </motion.div>
  );
};

export default memo(TechStacks);
