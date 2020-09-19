import React from 'react';
import { FormAdd } from '../../components/FormAdd/FormAdd';
import { useVisibility } from '../../hooks/useVisibility.hooks';

export const FormAddContainer = () => {
  const { visibility, handleToggleVisibility } = useVisibility();

  return <FormAdd visibility={visibility} closeHandler={handleToggleVisibility} />;
};
