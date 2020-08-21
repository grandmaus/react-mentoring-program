import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #424242;
`;

export const Footer = () => (
  <FooterWrapper>
    <Logo url="/" alt="Netflix Roulette" />
  </FooterWrapper>
);
