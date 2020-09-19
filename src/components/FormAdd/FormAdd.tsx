import React, { FC } from 'react';
import { FormModal } from '../FormModal/FormModal';
import CommonInput from '../CommonInput/CommonInput';
import { ButtonsWrapper } from '../Modal/styles/ButtonsWrapper';
import CommonButton from '../CommonButton/CommonButton';
import CustomSelect from '../CustomSelect/CustomSelect';

const stylesResetButton = {
  width: '200px',
  marginRight: '20px',
  color: '#f65251',
  background: 'transparent',
  borderColor: '#f65251'
};

const stylesSubmitButton = {
  width: '200px',
  color: '#ffffff',
  background: '#f65251',
  borderColor: '#f65251'
};

type Props = {
  visibility: boolean;
  closeHandler: () => void;
};

const options = ['Crime', 'Documentary', 'Horror', 'Comedy']

export const FormAdd: FC<Props> = ({ visibility, closeHandler }) => {
  return (
    <FormModal visibility={visibility} title="Add movie" closeHandler={closeHandler}>
      <CommonInput type="text" label="Title" name="title" placeholder="Title here" />
      <CommonInput type="date" label="Release date" name="date" placeholder="Select date" />
      <CommonInput type="text" label="Movie URL" name="url" placeholder="Movie URL here" />
      <CustomSelect label="Genre" placeholder="Select genre" options={options} />
      <CommonInput type="text" label="Overview" name="overview" placeholder="Overview here" />
      <CommonInput type="text" label="Runtime" name="runtime" placeholder="Runtime here" />
      <ButtonsWrapper>
        <CommonButton type="reset" text="Reset" styles={stylesResetButton} />
        <CommonButton text="Submit" styles={stylesSubmitButton} />
      </ButtonsWrapper>
    </FormModal>
  );
};
