import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

import {
  addMovie,
  deleteMovies,
  editMovie,
  fetchAddMovie,
  fetchEditMovie,
  fetchMovies,
  requestMovies,
  setFilterGenre,
  setSearchText,
  setSortingType,
} from '../actions';
import { ADD_MOVIE, EDIT_MOVIE, FETCH_MOVIES, SET_FILTER_GENRE, SET_SEARCH_TEXT, SET_SORTING_TYPE } from '../constants';

enableFetchMocks();

const mockMovies = {
  data: [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
  ],
};

const mockMoviesEdited = {
  data: [
    { id: 1, title: 'Movie 4' },
    { id: 2, title: 'Movie 2' },
  ],
};

const mockMoviesAdded = {
  data: [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
  ],
};

describe('Actions', () => {
  let dispatch: jest.Mock<any, any>;

  beforeAll(() => {
    dispatch = jest.fn();
  });

  beforeEach(() => {
    fetchMock.doMock();
    dispatch.mockClear();
  });

  it('should create requestMovie action', () => {
    const expectedAction = {
      type: FETCH_MOVIES,
      movies: mockMovies,
    };
    expect(requestMovies(mockMovies as any)).toEqual(expectedAction);
  });

  it('should create editMovie action', () => {
    const expectedAction = {
      type: EDIT_MOVIE,
      editedMovies: mockMovies,
    };
    expect(editMovie(mockMovies as any)).toEqual(expectedAction);
  });

  it('should create addMovie action', () => {
    const expectedAction = {
      type: ADD_MOVIE,
      addedMovie: { id: 3, title: 'Movie 3' },
    };
    expect(addMovie({ id: 3, title: 'Movie 3' } as any)).toEqual(expectedAction);
  });

  it('should create setSearchText action', () => {
    const expectedAction = {
      type: SET_SEARCH_TEXT,
      searchText: 'Star Wars',
    };
    expect(setSearchText('Star Wars')).toEqual(expectedAction);
  });

  it('should create setFilterGenre action', () => {
    const expectedAction = {
      type: SET_FILTER_GENRE,
      genre: 'Horror',
    };
    expect(setFilterGenre('Horror')).toEqual(expectedAction);
  });

  it('should create setSortingType action', () => {
    const expectedAction = {
      type: SET_SORTING_TYPE,
      sortingType: 'vote_average',
    };
    expect(setSortingType('vote_average')).toEqual(expectedAction);
  });

  it('should create fetchMovies action', async () => {
    fetchMock.mockResponse(JSON.stringify(mockMovies));
    await fetchMovies()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setSearchText(''));
    expect(dispatch).toHaveBeenCalledWith(setFilterGenre(''));
    expect(dispatch).toHaveBeenCalledWith(setSortingType('release_date'));
    expect(dispatch).toHaveBeenCalledWith(requestMovies(mockMovies as any));
  });

  it('should create deleteMovies action', async () => {
    await deleteMovies(123)(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('should create fetchEditMovie action', async () => {
    fetchMock.mockResponse(JSON.stringify(mockMoviesEdited));
    await fetchEditMovie({ id: 1, title: 'Movie 4' } as any)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(editMovie(mockMoviesEdited as any));
  });

  it('should create fetchAddMovie action', async () => {
    fetchMock.mockResponse(JSON.stringify(mockMoviesAdded));
    await fetchAddMovie({ id: 3, title: 'Movie 3' } as any)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(addMovie(mockMoviesAdded as any));
  });
});
