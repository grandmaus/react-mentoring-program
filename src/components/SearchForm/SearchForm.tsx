import React, { FC } from 'react';
import { CommonButton } from '../CommonButton/CommonButton';
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
};

export const SearchForm: FC<Props> = ({ action, method }) => (
  <Form action={action} method={method}>
    <Input type="search" name="search" placeholder="What do you want to watch?" />
    <CommonButton text="Search" styles={stylesButton} />
  </Form>
);
