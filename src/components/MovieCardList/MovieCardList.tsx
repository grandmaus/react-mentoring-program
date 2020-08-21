import movies from '../movies';
import { MovieCard } from '../movieCard/MovieCard';
import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1040px;
  padding: 0 20px;
  margin: 0 auto;
  list-style: none;
`;

const Item = styled.li`
  width: 320px;
  margin-right: 40px;
  margin-bottom: 40px;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const MovieCardList = () => (
  <List>
    {movies.map(item => (
      <Item>
        <MovieCard
          key={item.id}
          title={item.title}
          genre={item.genres[0]}
          year={item.release_date}
          image={item.poster_path}
          url={item.poster_path}
        />
      </Item>
    ))}
  </List>
);
