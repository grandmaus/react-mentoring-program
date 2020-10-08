import React, { FC, memo } from 'react';
import { useField } from 'formik';

type Props = {
  id: string;
  value: string;
  name: string;
  onInputChange?: (e: React.ChangeEvent<any>) => void;
  setError: (isError: boolean, errorText: string) => void;
};

const Checkbox: FC<Props> = ({ id, value, name, onInputChange, setError }) => {
  const [field, meta] = useField({ name, value });
  const isError = !!(meta.touched && meta.error);
  setError(isError, meta.error);

  return <input {...field} type="checkbox" name={name} id={id} value={value} onChange={onInputChange} />;
};

export default memo(Checkbox);
