import React, { FC, memo } from 'react';
import CommonButton from '../CommonButton/CommonButton';
import { Input } from './styles/Input';
import { Form } from './styles/Form';

const stylesButton = {
  width: '250px',
  color: '#ffffff',
  background: '#f65251',
  borderColor: '#f65251'
};

type Props = {
  action: string;
  method: string;
  onInputChange: (e: React.SyntheticEvent) => void;
  onButtonClick: (e: React.SyntheticEvent) => void;
};

const SearchForm: FC<Props> = ({ action, method, onInputChange, onButtonClick }) => (
  <Form action={action} method={method}>
    <Input onChange={onInputChange} type="search" name="search" placeholder="What do you want to watch?" />
    <CommonButton onButtonClick={onButtonClick} text="Search" styles={stylesButton} />
  </Form>
);

export default memo(SearchForm);
