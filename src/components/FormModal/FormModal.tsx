import React, { FC, ReactNode, memo } from 'react';
import { Form } from './styles/Form';
import Modal from '../Modal/Modal';

type Props = {
  children: ReactNode;
  visibility: boolean;
  title: string;
  closeHandler: () => void;
  onInputChange?: (e: React.SyntheticEvent) => void;
};

const FormModal: FC<Props> = ({ children, visibility = false, title, closeHandler, onInputChange }) => (
  <Modal visibility={visibility} title={title} closeHandler={closeHandler}>
    <Form onChange={onInputChange}>{children}</Form>
  </Modal>
);

export default memo(FormModal);
