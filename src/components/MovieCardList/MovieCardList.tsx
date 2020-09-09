import movies from '../movies';
import { MovieCard } from '../movieCard/MovieCard';
import React from 'react';
import { Item } from './styles/Item';
import { List } from './styles/List';

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
