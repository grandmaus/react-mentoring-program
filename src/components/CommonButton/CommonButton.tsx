import React, { FC } from 'react';
import { Button, StyledProps } from './styles/Button';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  styles: StyledProps;
};

export const CommonButton: FC<Props> = ({ text, type = 'submit', styles: { width, marginRight, background, borderColor, color } }) => (
  <Button type={type} width={width} marginRight={marginRight} background={background} borderColor={borderColor} color={color}>
    {text}
  </Button>
);
