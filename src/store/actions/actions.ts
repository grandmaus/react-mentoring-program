import {
  FETCH_FILTERED_MOVIES,
  FETCH_MOVIES,
  FETCH_SEARCHED_MOVIES,
  FETCH_SORTED_MOVIES,
} from './constants';
import { ENDPOINT } from '../constants';
import { Movie } from '../types';

export const requestMovies = (payload: ReadonlyArray<Movie>) => ({
  type: FETCH_MOVIES,
  payload
});

export const requestSortedMovies = (payload: ReadonlyArray<Movie>) => ({
  type: FETCH_SORTED_MOVIES,
  payload
});

export const requestFilteredMovies = (payload: ReadonlyArray<Movie>) => ({
  type: FETCH_FILTERED_MOVIES,
  payload
});

export const requestSearchedMovies = (payload: ReadonlyArray<Movie>) => ({
  type: FETCH_SEARCHED_MOVIES,
  payload
});

export const fetchMovies = () => async (dispatch: any) => {
  const response = await fetch(`${ENDPOINT}?limit=15`);
  const data = await response.json();
  return dispatch(requestMovies(data));
};

export const fetchSortedMovies = (type: string) => async (dispatch: any) => {
  const response = await fetch(`${ENDPOINT}?sortBy=${type}&sortOrder=desc&limit=15`);
  const data = await response.json();
  return dispatch(requestSortedMovies(data));
};

export const fetchFilteredMovies = (genre: string) => async (dispatch: any) => {
  const response = await fetch(`${ENDPOINT}?filter=${genre}&sortOrder=desc&limit=15`);
  const data = await response.json();
  return dispatch(requestFilteredMovies(data));
};

export const fetchSearchedMovies = (title: string) => async (dispatch: any) => {
  const response = await fetch(`${ENDPOINT}?search=${title}&searchBy=title&limit=15`);
  const data = await response.json();
  return dispatch(requestSearchedMovies(data));
};

export const deleteMovies = (id: number) => async (dispatch: any) => {
  await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE'
  });
  return dispatch(fetchMovies());
};
