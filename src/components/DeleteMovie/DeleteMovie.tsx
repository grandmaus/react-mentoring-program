import React, {FC} from 'react';
import {ButtonsWrapper} from '../Modal/styles/ButtonsWrapper';
import CommonButton from '../CommonButton/CommonButton';
import {Modal} from '../Modal/Modal';

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
