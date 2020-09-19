import React from 'react';
import { FormEdit } from '../../components/FormEdit/FormEdit';
import { useVisibility } from '../../hooks/useVisibility.hooks';

export const FormEditContainer = () => {
  const { visibility, handleToggleVisibility } = useVisibility();

  return <FormEdit visibility={visibility} closeHandler={handleToggleVisibility} />;
};
