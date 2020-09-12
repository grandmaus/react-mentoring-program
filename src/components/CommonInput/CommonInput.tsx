import React, { FC } from 'react';
import {Input} from "./styles/Input";
import {Label} from "./styles/Label";

type Props = {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
};

export const CommonInput: FC<Props> = ({ type, label, name, placeholder, disabled, value }) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} placeholder={placeholder} disabled={disabled} value={value} />
  </>
);
