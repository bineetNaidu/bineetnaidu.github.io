import { FC } from 'react';
import '../styles/Wrapper.scss';
import { SocialHandlers } from './SocialHandlers';
import { EmailHandlers } from './EmailHandlers';

export const Wrapper: FC = ({ children }) => {
  return (
    <div className="wrapper">
      <SocialHandlers />
      <div className="wrapper__body">{children}</div>
      <EmailHandlers />
    </div>
  );
};
