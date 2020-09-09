import React from 'react';
import { SortingList } from '../SortingList/SortingList';
import { DirectionTitle } from './styles/DirectionTitle';
import { DirectionText } from './styles/DirectionText';
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
        <DirectionText>Release date</DirectionText>
      </Direction>
    </ListWrapper>
    <Result>39 movies found</Result>
  </SortingWrapper>
);
