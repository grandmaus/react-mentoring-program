import { DELETE_MOVIES, FETCH_MOVIES, SET_FILTER_GENRE, SET_SEARCHED_MOVIES, SET_SORT_TYPE } from './constants';
import { ENDPOINT } from '../constants';
import { Movie } from '../types';

export const requestMovies = (payload: ReadonlyArray<Movie>) => ({
  type: FETCH_MOVIES,
  payload
});

export const fetchMovies = () => (dispatch: any) => {
  return fetch(`${ENDPOINT}`)
    .then(response => response.json())
    .then(data => {
      return dispatch(requestMovies(data));
    });
};

export const deleteMovie = (id: string) => ({
  type: DELETE_MOVIES,
  id
});

export const deleteMovies = (id: string) => (dispatch: any) => {
  return fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE'
  }).then(() => {
    dispatch(deleteMovie(id));
  });
};

export const setFilterGenre = (genre: string) => {
  return {
    type: SET_FILTER_GENRE,
    payload: genre
  };
};

export const setSortType = (type: string) => {
  return {
    type: SET_SORT_TYPE,
    payload: type
  };
};

export const setSearchedMovies = (payload: ReadonlyArray<object>) => {
  return {
    type: SET_SEARCHED_MOVIES,
    payload
  };
};
