import React, { useState } from 'react';
import { FormEdit } from '../../components/FormEdit/FormEdit';

export const FormEditContainer = () => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const closeHandler = () => setVisibility(!visibility);

  return <FormEdit visibility={visibility} closeHandler={closeHandler} />;
};
