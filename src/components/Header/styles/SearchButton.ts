import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchIcon from '../../../../public/image/search.svg';

export const SearchButton = styled(Link)`
  display: block;
  padding: 0;
  border: none;
  font-size: 0;
  background-color: transparent;

  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
  }
`;
