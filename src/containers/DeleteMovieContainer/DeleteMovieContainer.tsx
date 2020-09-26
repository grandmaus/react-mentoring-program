import React, { FC } from 'react';
import { DeleteMovie } from '../../components/DeleteMovie/DeleteMovie';

type Props = {
  visibility: boolean;
  handleToggleVisibility: () => void;
  onConfirmClick: (e: React.SyntheticEvent) => void;
};

export const DeleteMovieContainer: FC<Props> = ({ visibility, handleToggleVisibility, onConfirmClick }) => {
  return <DeleteMovie visibility={visibility} closeHandler={handleToggleVisibility} onConfirmClick={onConfirmClick} />;
};
