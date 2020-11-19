export const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const headerVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: 'calc(100vw - 25vw)',
    transition: { delay: 1, duration: 1.2 },
  },
};

export const tilemuskVariant = {
  initial: {
    opacity: 0,
    y: '-20vh',
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.6, duration: 0.8 },
  },
};

export const backdropVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-200vw',
    transition: { delay: 0.5, duration: 0.5 },
  },
};

export const aboutMeVariant = {
  initial: {
    y: '55vh',
  },
  animate: {
    y: 0,
    transition: { delay: 1.6, duration: 0.8 },
  },
};
