import React, { FC, memo } from 'react';
import { LogoLink } from './styles/LogoLink';

type Props = {
  url: string;
};

const Logo: FC<Props> = ({ url }) => (
  <LogoLink to={url}>
    <span>netflix</span>roulette
  </LogoLink>
);

export default memo(Logo);
