import React, { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button<StyledProps>`
  display: block;
  width: ${props => props.width};
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.color};
  border: 2px solid ${props => props.borderColor};
  border-radius: 4px;
  background-color: ${props => props.background};

  &:hover {
    opacity: 0.7;
  }
`;

type Props = {
  text: string;
  styles: StyledProps;
};

type StyledProps = {
  width: string;
  color: string;
  background: string;
  borderColor: string;
};

export const CommonButton: FC<Props> = ({ text, styles: { width, background, borderColor, color } }) => (
  <Button width={width} background={background} borderColor={borderColor} color={color}>
    {text}
  </Button>
);
