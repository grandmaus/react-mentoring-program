import React, { useState } from 'react';
import { FormAdd } from '../../components/FormAdd/FormAdd';

export const FormAddContainer = () => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const closeHandler = () => setVisibility(!visibility);

  return <FormAdd visibility={visibility} closeHandler={closeHandler} />;
};
