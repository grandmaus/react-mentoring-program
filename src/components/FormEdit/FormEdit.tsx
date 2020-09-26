import React, { FC, useState } from 'react';
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
  id: string;
  title: string;
  date: string;
  url: string;
  genres: ReadonlyArray<string>;
  overview: string;
  runtime: string;
  visibility: boolean;
  closeHandler: () => void;
};

export const FormEdit: FC<Props> = ({ visibility, closeHandler, id, title, date, url, genres, overview, runtime }) => {
  const [values, setValues] = useState({ id, title, date, url, genres, overview, runtime });
  const handleInputChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <FormModal visibility={visibility} title="Edit movie" closeHandler={closeHandler} onInputChange={handleInputChange}>
      <CommonInput type="text" label="Movie ID" name="id" value={values.id} disabled />
      <CommonInput type="text" label="Title" name="title" placeholder="Title here" value={values.title} />
      <CommonInput type="date" label="Release date" name="date" placeholder="Select date" value={values.date} />
      <CommonInput type="text" label="Movie URL" name="url" placeholder="Movie URL here" value={values.url} />
      <CustomSelect label="Genre" placeholder="Select genre" options={values.genres} />
      <CommonInput type="text" label="Overview" name="overview" placeholder="Overview here" value={values.overview} />
      <CommonInput type="text" label="Runtime" name="runtime" placeholder="Runtime here" value={values.runtime} />
      <ButtonsWrapper>
        <CommonButton type="reset" text="Reset" styles={stylesResetButton} />
        <CommonButton text="Save" styles={stylesSubmitButton} />
      </ButtonsWrapper>
    </FormModal>
  );
};
