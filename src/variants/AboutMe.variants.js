export const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

export const leftVariant = {
  initial: { opacity: 0, x: '-50vw', height: 0, width: 0 },
  animate: {
    opacity: 1,
    x: '0',
    height: '100%',
    width: '100%',
  },
};

export const rightVariant = {
  initial: { opacity: 0, x: '150vw', height: 0, width: 0 },
  animate: {
    opacity: 1,
    x: '0',
    height: '100%',
    width: '100%',
  },
};

export const themeVariants = {
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
