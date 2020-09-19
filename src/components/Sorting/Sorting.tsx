import React from 'react';
import { SortingList } from '../SortingList/SortingList';
import { DirectionTitle } from './styles/DirectionTitle';
import { Select } from './styles/Select';
import { ListWrapper } from './styles/ListWrapper';
import { Direction } from './styles/Direction';
import { Result } from './styles/Result';
import { SortingWrapper } from './styles/SortingWrapper';

export const Sorting = () => (
  <SortingWrapper>
    <ListWrapper>
      <SortingList />
      <Direction>
        <DirectionTitle>Sort by</DirectionTitle>
        <Select>
          <option value="Release date">Release date</option>
          <option value="Genre">Genre</option>
          <option value="Rating">Rating</option>
        </Select>
      </Direction>
    </ListWrapper>
    <Result>39 movies found</Result>
  </SortingWrapper>
);
