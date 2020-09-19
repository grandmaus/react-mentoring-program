import React from 'react';
import { DeleteMovie } from '../../components/DeleteMovie/DeleteMovie';
import { useVisibility } from '../../hooks/useVisibility.hooks';

export const DeleteMovieContainer = () => {
  const { visibility, handleToggleVisibility } = useVisibility();

  return <DeleteMovie visibility={visibility} closeHandler={handleToggleVisibility} />;
};
