import { EDIT_MOVIE, FETCH_MOVIES, SET_FILTER_GENRE, SET_SEARCH_TEXT, SET_SORTING_TYPE, ADD_MOVIE } from './constants';
import { ENDPOINT } from '../constants';
import { Movie } from '../types';

export const requestMovies = (movies: ReadonlyArray<Movie>) => ({
  type: FETCH_MOVIES,
  movies,
});

export const editMovie = (editedMovies: ReadonlyArray<Movie>) => ({
  type: EDIT_MOVIE,
  editedMovies,
});

export const addMovie = (addedMovie: ReadonlyArray<Movie>) => ({
  type: ADD_MOVIE,
  addedMovie,
});

export const setSearchText = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});

export const setFilterGenre = (genre: string) => ({
  type: SET_FILTER_GENRE,
  genre,
});

export const setSortingType = (sortingType: string) => ({
  type: SET_SORTING_TYPE,
  sortingType,
});

export const fetchMovies = (text = '', sort = 'release_date', filter = '') => async (dispatch: any) => {
  const encodedText = encodeURIComponent(text);
  const response = await fetch(
    `${ENDPOINT}?sortBy=${sort}&sortOrder=desc&search=${encodedText}&searchBy=title&filter=${filter}&limit=35`,
  );
  const data = await response.json();

  dispatch(setSearchText(text));
  dispatch(setFilterGenre(filter));
  dispatch(setSortingType(sort));
  return dispatch(requestMovies(data));
};

export const deleteMovies = (id: number) => async (dispatch: any) => {
  await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
  });
  return dispatch(fetchMovies());
};

export const fetchEditMovie = (movie: Movie) => async (dispatch: any) => {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  const data = await response.json();

  return dispatch(editMovie(data));
};

export const fetchAddMovie = (movie: Movie) => async (dispatch: any) => {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  const data = await response.json();

  return dispatch(addMovie(data));
};
