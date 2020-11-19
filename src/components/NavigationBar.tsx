import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

interface Props {
  direction?: 'invert' | 'default';
  label: string;
  link: string;
}

const NavigationBar: React.FC<Props> = ({
  direction = 'default',
  label,
  link,
}) => {
  return (
    <Link to={link} className="navigationBar">
      <motion.div>{label}</motion.div>
    </Link>
  );
};

export default NavigationBar;
