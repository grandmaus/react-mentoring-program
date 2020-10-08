import React, { FC, memo, useCallback, useState, useRef } from 'react';
import { ToggleList } from './styles/ToggleList';
import { Label } from './styles/Label';
import { OptionsList } from './styles/OptionsList';
import { OptionItem } from './styles/OptionItem';
import { SelectContainer } from './styles/SelectContainer';
import { CheckboxLabel } from './styles/CheckboxLabel';
import { useVisibility } from '../../hooks/useVisibility.hooks';
import Checkbox from '../Checkbox/Checkbox';
import { ErrorMessage } from '../CommonInput/styles/ErrorMessage';

type Props = {
  label: string;
  placeholder: string;
  options: ReadonlyArray<string>;
  onInputChange?: (e: React.ChangeEvent<any>) => void;
};

const CustomSelect: FC<Props> = ({ label, placeholder, options, onInputChange }) => {
  const { visibility, handleToggleVisibility } = useVisibility();

  const isErrorRef = useRef(false);
  const errorMessageRef = useRef(null);

  const setErrorHandler = useCallback((error, errorText) => {
    isErrorRef.current = error;
    errorMessageRef.current = errorText;
  }, []);

  return (
    <SelectContainer>
      <Label>{label}</Label>
      <ToggleList isError={isErrorRef.current} type="button" onClick={handleToggleVisibility}>
        {placeholder}
      </ToggleList>
      <OptionsList visible={visibility}>
        {options.map((item) => (
          <OptionItem key={item}>
            <Checkbox setError={setErrorHandler} id={item} value={item} name="genres" onInputChange={onInputChange} />
            <CheckboxLabel htmlFor={item}>{item}</CheckboxLabel>
          </OptionItem>
        ))}
      </OptionsList>
      {isErrorRef.current && <ErrorMessage>{errorMessageRef.current}</ErrorMessage>}
    </SelectContainer>
  );
};

export default memo(CustomSelect);
