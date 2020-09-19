import React, { FC, ReactElement } from 'react';
import { Container } from './styles/Container';
import { Overlay } from './styles/Overlay';
import { CloseButton } from './styles/CloseButton';
import {Title} from "./styles/Title";

type Props = {
  children: ReactElement;
  visibility: boolean;
  title: string;
  closeHandler: () => void;
};

export const Modal: FC<Props> = ({ children, visibility = false, title, closeHandler }) =>
  visibility && (
    <>
      <Container>
        <CloseButton onClick={closeHandler} />
        <Title>{title}</Title>
        {children}
      </Container>
      <Overlay />
    </>
  );
