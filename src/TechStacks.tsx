import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  containerVariant,
  imgVariants as techVariant,
} from './variants/TechStacks.variants';
import useFirestore from './hooks/useFirestore';
// Statics
import './TechStacks.css';

interface Techs {
  id: string;
  name: string;
  image: string;
}

const TechStacks: React.FC = () => {
  const { docs } = useFirestore('techs');
  return (
    <motion.div
      className="techs"
      variants={containerVariant}
      initial="initial"
      animate="animate"
    >
      <h3>#Techs that I Use</h3>

      <div className="techs__lists">
        {docs.map((t: Techs) => (
          <motion.div className="tech__item" variants={techVariant}>
            <img
              key={t.name}
              className="techs__img"
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

export default memo(TechStacks);
