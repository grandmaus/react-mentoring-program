import React, { FC } from 'react';
import styled from 'styled-components';
import { CommonButton } from '../CommonButton/CommonButton';

const Form = styled.form`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 20px;
  border: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
`;

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
