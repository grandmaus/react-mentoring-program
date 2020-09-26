import React, { FC } from 'react';
import { LogoLink } from './styles/LogoLink';

type Props = {
  url: string;
};

export const Logo: FC<Props> = ({ url }) => (
  <LogoLink href={url}>
    <span>netflix</span>roulette
  </LogoLink>
);
