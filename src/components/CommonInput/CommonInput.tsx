import React, { FC, memo } from 'react';
import { useField } from 'formik';
import { Input } from './styles/Input';
import { Label } from './styles/Label';
import { InputContainer } from './styles/InputContainer';
import { ErrorMessage } from './styles/ErrorMessage';

type Props = {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onInputChange?: (e: React.ChangeEvent<any>) => void;
};
const CommonInput: FC<Props> = ({ type, label, name, placeholder, disabled, value, onInputChange }) => {
  const [field, meta] = useField({ name, value });
  const isError = !!(meta.touched && meta.error);

  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...field}
        isError={isError}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onInputChange}
      />
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputContainer>
  );
};

export default memo(CommonInput);
