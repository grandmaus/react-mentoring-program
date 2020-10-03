import React, { memo } from 'react';
import FormAdd from '../../components/FormAdd/FormAdd';
import { useVisibility } from '../../hooks/useVisibility.hooks';

const FormAddContainer = () => {
  const { visibility, handleToggleVisibility } = useVisibility();

  return <FormAdd visibility={visibility} closeHandler={handleToggleVisibility} />;
};

export default memo(FormAddContainer);
