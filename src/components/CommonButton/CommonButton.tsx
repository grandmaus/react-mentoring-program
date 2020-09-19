import React, { FC, memo } from 'react';
import { Button, StyledProps } from './styles/Button';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  styles: StyledProps;
};

const CommonButton: FC<Props> = ({ text, type = 'submit', styles: { width, marginRight, background, borderColor, color } }) => (
  <Button type={type} width={width} marginRight={marginRight} background={background} borderColor={borderColor} color={color}>
    {text}
  </Button>
);

export default memo(CommonButton);
