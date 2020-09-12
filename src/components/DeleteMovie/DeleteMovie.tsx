import React, { FC } from 'react';
import { FormModal } from '../FormModal/FormModal';
import { CommonInput } from '../CommonInput/CommonInput';
import { ButtonsWrapper } from '../Modal/styles/ButtonsWrapper';
import { CommonButton } from '../CommonButton/CommonButton';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Modal } from '../Modal/Modal';
import { Form } from '../FormModal/styles/Form';

const stylesResetButton = {
  width: '200px',
  marginRight: '20px',
  color: '#f65251',
  background: 'transparent',
  borderColor: '#f65251'
};

const stylesButton = {
  width: '200px',
  color: '#ffffff',
  background: '#f65251',
  borderColor: '#f65251'
};

type Props = {
  visibility: boolean;
  closeHandler: () => void;
};

export const DeleteMovie: FC<Props> = ({ visibility = true, closeHandler }) => (
  <Modal visibility={visibility} title="Delete movie" closeHandler={closeHandler}>
    <>
      <p>Are you sure you want to delete this movie?</p>
      <ButtonsWrapper>
        <CommonButton text="Confirm" styles={stylesButton} />
      </ButtonsWrapper>
    </>
  </Modal>
);
