import React, { FC, memo } from 'react';
import { Button, StyledProps } from './styles/Button';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  styles: StyledProps;
  onButtonClick?: (e: React.SyntheticEvent) => void;
  element?: any;
  link?: string;
};

const CommonButton: FC<Props> = ({ onButtonClick, text, type = 'submit', styles, element, link }) => (
  <Button as={element} to={link} onClick={onButtonClick} type={type} {...styles}>
    {text}
  </Button>
);

export default memo(CommonButton);
