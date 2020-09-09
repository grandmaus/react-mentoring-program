import React, { FC } from 'react';
import { Button, StyledProps } from './styles/Button';

type Props = {
  text: string;
  styles: StyledProps;
};

export const CommonButton: FC<Props> = ({ text, styles: { width, background, borderColor, color } }) => (
  <Button width={width} background={background} borderColor={borderColor} color={color}>
    {text}
  </Button>
);
