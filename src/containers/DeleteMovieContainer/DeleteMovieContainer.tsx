import React, { useState } from 'react';
import { DeleteMovie } from '../../components/DeleteMovie/DeleteMovie';

export const DeleteMovieContainer = () => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const closeHandler = () => setVisibility(!visibility);

  return <DeleteMovie visibility={visibility} closeHandler={closeHandler} />;
};
