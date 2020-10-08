import React, { FC, ReactNode, memo } from 'react';
import { Form } from './styles/Form';
import Modal from '../Modal/Modal';

type Props = {
  children: ReactNode;
  visibility: boolean;
  title: string;
  closeHandler: () => void;
  onFormSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onFormReset?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormModal: FC<Props> = ({ children, visibility = false, title, closeHandler, onFormSubmit, onFormReset }) => (
  <Modal visibility={visibility} title={title} closeHandler={closeHandler}>
    <Form onSubmit={onFormSubmit} onReset={onFormReset}>
      {children}
    </Form>
  </Modal>
);

export default memo(FormModal);
