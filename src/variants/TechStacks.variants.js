export const containerVariant = {
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

export const imgVariants = {
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
