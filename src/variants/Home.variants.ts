export const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const wrapperVariant = {
  initial: {
    y: '4vh',
  },
  animate: {
    y: 0,
    transition: { delay: 0.1 },
  },
};

export const brandVariant = {
  initial: {
    opacity: 0,
    y: '-10vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 },
  },
};

export const navigationVariant1 = {
  initial: {
    opacity: 0,
    x: '-10vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 },
  },
};

export const navigationVariant2 = {
  initial: {
    opacity: 0,
    x: '10vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 },
  },
};
