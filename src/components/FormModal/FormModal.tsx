import React, {FC, ReactElement, ReactNode} from 'react';
import { Form } from './styles/Form';
import { Modal } from '../Modal/Modal';

type Props = {
  children: ReactNode;
  visibility: boolean;
  title: string;
  closeHandler: () => void;
};

export const FormModal: FC<Props> = ({ children, visibility = false, title, closeHandler }) => (
  <Modal visibility={visibility} title={title} closeHandler={closeHandler}>
    <Form>{children}</Form>
  </Modal>
);
