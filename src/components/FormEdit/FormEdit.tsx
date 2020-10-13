import React, { FC, memo } from 'react';
import FormModal from '../FormModal/FormModal';
import CommonInput from '../CommonInput/CommonInput';
import { ButtonsWrapper } from '../Modal/styles/ButtonsWrapper';
import CommonButton from '../CommonButton/CommonButton';
import CustomSelect from '../CustomSelect/CustomSelect';

const stylesResetButton = {
  width: '200px',
  marginRight: '20px',
  color: '#f65251',
  background: 'transparent',
  borderColor: '#f65251',
};

const stylesSubmitButton = {
  width: '200px',
  color: '#ffffff',
  background: '#f65251',
  borderColor: '#f65251',
};

type Props = {
  id: number;
  title: string;
  date: string;
  url: string;
  genresArray: ReadonlyArray<string>;
  overview: string;
  runtime: number;
  visibility: boolean;
  closeHandler: () => void;
  inputChangeHandler?: (e: React.ChangeEvent<any>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormEdit: FC<Props> = ({
  inputChangeHandler,
  visibility,
  closeHandler,
  id,
  title,
  date,
  url,
  genresArray,
  overview,
  runtime,
  handleSubmit,
  handleReset,
}) => (
  <FormModal
    visibility={visibility}
    title="Edit movie"
    closeHandler={closeHandler}
    onFormSubmit={handleSubmit}
    onFormReset={handleReset}
  >
    <CommonInput type="text" label="Movie ID" name="id" onInputChange={inputChangeHandler} value={id} disabled />
    <CommonInput
      type="text"
      label="Title"
      name="title"
      placeholder="Title here"
      onInputChange={inputChangeHandler}
      value={title}
    />
    <CommonInput
      type="date"
      label="Release date"
      name="release_date"
      placeholder="Select date"
      onInputChange={inputChangeHandler}
      value={date}
    />
    <CommonInput
      type="text"
      label="Movie URL"
      name="poster_path"
      placeholder="Movie URL here"
      onInputChange={inputChangeHandler}
      value={url}
    />
    <CustomSelect label="Genre" placeholder="Select genre" onInputChange={inputChangeHandler} options={genresArray} />
    <CommonInput
      type="text"
      label="Overview"
      name="overview"
      placeholder="Overview here"
      onInputChange={inputChangeHandler}
      value={overview}
    />
    <CommonInput
      type="number"
      label="Runtime"
      name="runtime"
      placeholder="Runtime here"
      onInputChange={inputChangeHandler}
      value={runtime}
    />
    <ButtonsWrapper>
      <CommonButton type="reset" text="Reset" styles={stylesResetButton} />
      <CommonButton type="submit" text="Save" styles={stylesSubmitButton} />
    </ButtonsWrapper>
  </FormModal>
);

export default memo(FormEdit);
