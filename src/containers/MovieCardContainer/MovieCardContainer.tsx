import React, { FC, useCallback, useState, memo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteMovies } from '../../store/actions/actions';
import MovieCard from '../../components/movieCard/MovieCard';
import DeleteMovieContainer from '../DeleteMovieContainer/DeleteMovieContainer';
import { useVisibility } from '../../hooks/useVisibility.hooks';
import FormEditContainer from '../FormEditContainer/FormEditContainer';

type Props = {
  id: number;
  title: string;
  image: string;
  genre: string;
  year: string;
  url: string;
  genres: ReadonlyArray<string>;
  overview: string;
  runtime: number;
  showDetailsHandler: (e: React.SyntheticEvent) => void;
  deleteMovie: (id: number) => void;
};

const MovieCardContainer: FC<Props> = ({
  id,
  title,
  image,
  genre,
  year,
  url,
  showDetailsHandler,
  deleteMovie,
  genres,
  overview,
  runtime
}) => {
  const { visibility, handleToggleVisibility } = useVisibility();
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onDeleteMovie = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsDelete(!isDelete);
      setIsEdit(false);
      handleToggleVisibility();
    },
    [handleToggleVisibility, isDelete]
  );

  const onEditMovie = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsEdit(!isEdit);
      setIsDelete(false);
      handleToggleVisibility();
    },
    [handleToggleVisibility, isEdit]
  );

  const onConfirmDelete = useCallback(() => {
    deleteMovie(id);
    setIsDelete(false);
  }, [deleteMovie, id]);

  return (
    <>
      {isEdit && (
        <FormEditContainer
          visibility={visibility}
          handleToggleVisibility={handleToggleVisibility}
          id={id}
          title={title}
          date={year}
          url={url}
          genres={genres}
          overview={overview}
          runtime={runtime}
        />
      )}
      {isDelete && (
        <DeleteMovieContainer
          visibility={visibility}
          handleToggleVisibility={handleToggleVisibility}
          onConfirmClick={onConfirmDelete}
        />
      )}
      <MovieCard
        id={id}
        title={title}
        image={image}
        genre={genre}
        year={year}
        url={url}
        showDetailsHandler={showDetailsHandler}
        onDeleteClick={onDeleteMovie}
        onEditClick={onEditMovie}
      />
    </>
  );
};

const matchDispatchToProps = (dispatch: any) => ({
  deleteMovie: bindActionCreators(deleteMovies, dispatch)
});

export default connect(null, matchDispatchToProps)(memo(MovieCardContainer));
