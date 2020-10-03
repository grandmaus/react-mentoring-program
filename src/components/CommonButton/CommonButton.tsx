import React, { FC, memo } from 'react';
import { Button, StyledProps } from './styles/Button';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  styles: StyledProps;
  onButtonClick?: (e: React.SyntheticEvent) => void;
};

const CommonButton: FC<Props> = ({ onButtonClick, text, type = 'submit', styles }) => (
  <Button onClick={onButtonClick} type={type} {...styles}>
    {text}
  </Button>
);

export default memo(CommonButton);
