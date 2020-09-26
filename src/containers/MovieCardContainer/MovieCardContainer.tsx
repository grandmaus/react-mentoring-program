import React, { FC, useCallback, useState } from 'react';
import { deleteMovies, fetchMovies } from '../../store/actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieCard from '../../components/movieCard/MovieCard';
import { DeleteMovieContainer } from '../DeleteMovieContainer/DeleteMovieContainer';
import { useVisibility } from '../../hooks/useVisibility.hooks';
import { FormEditContainer } from '../FormEditContainer/FormEditContainer';

type Props = {
  id: string;
  title: string;
  image: string;
  genre: string;
  year: string;
  url: string;
  genres: ReadonlyArray<string>;
  overview: string;
  runtime: string;
  showDetailsHandler: (e: React.SyntheticEvent) => void;
  deleteMovie: any;
  requestMovies: any;
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
  requestMovies,
  genres,
  overview,
  runtime
}) => {
  const { visibility, handleToggleVisibility } = useVisibility();
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onDeleteMovie = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsDelete(!isDelete);
    setIsEdit(false);
    handleToggleVisibility();
  }, []);

  const onEditMovie = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    setIsDelete(false);
    handleToggleVisibility();
  }, []);

  const onConfirmDelete = useCallback(() => {
    deleteMovie(id);
    setTimeout(() => requestMovies(), 1000);
    setIsDelete(false);
  }, [id]);

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

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies
});

const matchDispatchToProps = (dispatch: any) => ({
  deleteMovie: bindActionCreators(deleteMovies, dispatch),
  requestMovies: bindActionCreators(fetchMovies, dispatch)
});

export default connect(mapStateToProps, matchDispatchToProps)(MovieCardContainer);
