import React, { FC } from 'react';
import { FormEdit } from '../../components/FormEdit/FormEdit';

type Props = {
  id: string;
  title: string;
  date: string;
  url: string;
  genres: ReadonlyArray<string>;
  overview: string;
  runtime: string;
  visibility: boolean;
  handleToggleVisibility: () => void;
};

export const FormEditContainer: FC<Props> = ({
  visibility,
  handleToggleVisibility,
  id,
  title,
  date,
  url,
  genres,
  overview,
  runtime
}) => {
  return (
    <FormEdit
      visibility={visibility}
      closeHandler={handleToggleVisibility}
      id={id}
      title={title}
      date={date}
      url={url}
      genres={genres}
      overview={overview}
      runtime={runtime}
    />
  );
};
