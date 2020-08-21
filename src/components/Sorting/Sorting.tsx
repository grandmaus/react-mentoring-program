import React from 'react';
import styled from 'styled-components';

const SortingWrapper = styled.div`
  max-width: 1040px;
  padding: 0 20px;
  margin: 0 auto;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid #424242;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin-right: 10px;
`;

const Button = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  background-color: transparent;
`;

const Direction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DirectionTitle = styled.p`
  margin: 0 20px 0 0;
  font-size: 18px;
  text-transform: uppercase;
  color: #555555;
`;

const DirectionText = styled.button`
  margin: 0;
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  background-color: transparent;
`;

const Result = styled.p`
  margin: 0;
  padding: 20px 0;
  font-size: 18px;
  color: #ffffff;
  border-top: 1px solid #000000;
`;

export const Sorting = () => (
  <SortingWrapper>
    <ListWrapper>
      <List>
        <Item>
          <Button>All</Button>
        </Item>
        <Item>
          <Button>Documentary</Button>
        </Item>
        <Item>
          <Button>Comedy</Button>
        </Item>
        <Item>
          <Button>Horror</Button>
        </Item>
        <Item>
          <Button>Crime</Button>
        </Item>
      </List>
      <Direction>
        <DirectionTitle>Sort by</DirectionTitle>
        <DirectionText>Release date</DirectionText>
      </Direction>
    </ListWrapper>
    <Result>39 movies found</Result>
  </SortingWrapper>
);
