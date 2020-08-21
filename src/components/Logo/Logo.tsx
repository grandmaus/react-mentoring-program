import React, { FC } from 'react';
import styled from 'styled-components';

const LogoLink = styled.a`
  display: block;
  width: 200px;
  height: 30px;
`;


type Props = {
  url: string;
  alt: string;
};

export const Logo: FC<Props> = ({ url, alt }) => (
  <LogoLink href={url}>
    <img src="https://via.placeholder.com/200x30" alt={alt} />
  </LogoLink>
);
