'use client';

import Lottie from 'lottie-react';
import { FC } from 'react';

type Props = {
  animationPath: unknown;
  width?: number | string;
};

const AnimationLottie: FC<Props> = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
