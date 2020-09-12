import React, { FC, useState } from 'react';
import { ToggleList } from './styles/ToggleList';
import { Label } from './styles/Label';
import { OptionsList } from './styles/OptionsList';
import { OptionItem } from './styles/OptionItem';
import { SelectContainer } from './styles/SelectContainer';
import {CheckboxLabel} from "./styles/CheckboxLabel";

type Props = {
  label: string;
  placeholder: string;
  options: ReadonlyArray<string>;
};

export const CustomSelect: FC<Props> = ({ label, placeholder, options }) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const toggleVisibility = () => setVisibility(!visibility);

  return (
    <SelectContainer>
      <Label>{label}</Label>
      <ToggleList type="button" onClick={toggleVisibility}>{placeholder}</ToggleList>
      {visibility && (
        <OptionsList>
          {options.map(item => (
            <OptionItem key={item}>
              <input type="checkbox" name="genre" id={item} value={item} />
              <CheckboxLabel htmlFor={item}>{item}</CheckboxLabel>
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
