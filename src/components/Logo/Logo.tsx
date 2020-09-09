import React, { FC } from 'react';
import { LogoLink } from './styles/LogoLink';

type Props = {
  url: string;
  alt: string;
};

export const Logo: FC<Props> = ({ url, alt }) => (
  <LogoLink href={url}>
    <img src="https://via.placeholder.com/200x30" alt={alt} />
  </LogoLink>
);
