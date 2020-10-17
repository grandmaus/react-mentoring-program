import React, { FC, memo, useCallback } from 'react';
import Logo from '../Logo/Logo';
import CommonButton from '../CommonButton/CommonButton';
import { Wrapper } from './styles/Wrapper';
import { Container } from './styles/Container';
import { Banner } from './styles/Banner';
import { Title } from './styles/Title';
import { Row } from './styles/Row';
import MovieDetails from '../MovieDetails/MovieDetails';
import { SearchButton } from './styles/SearchButton';
import SearchFormContainer from '../../containers/SearchFormContainer/SearchFormContainer';
import { Movie } from '../../store/types';
import FormAddContainer from '../../containers/FormAddContainer/FormAddContainer';
import { useVisibility } from '../../hooks/useVisibility.hooks';

const stylesButton = {
  width: '200px',
  color: '#f65251',
  background: 'rgba(0, 0, 0, 0.5)',
  borderColor: 'transparent',
};

type Props = {
  title: string;
  isShowDetails: boolean;
  returnToSearch: () => void;
  movie: Movie;
};

const Header: FC<Props> = ({ title, isShowDetails, returnToSearch, movie }) => {
  const { visibility, handleToggleVisibility } = useVisibility();

  const onAddMovie = useCallback(() => handleToggleVisibility(), [handleToggleVisibility]);

  return (
    <Wrapper isShowDetails={isShowDetails}>
      <Container>
        <Row>
          <Logo url="/" />
          {isShowDetails ? (
            <SearchButton to="/" onClick={returnToSearch}>
              Search
            </SearchButton>
          ) : (
            <CommonButton text="Add Movie" styles={stylesButton} onButtonClick={onAddMovie} />
          )}
        </Row>
        {isShowDetails ? (
          <MovieDetails
            title={movie.title}
            image={movie.poster_path}
            overview={movie.overview}
            rating={movie.vote_average}
            runtime={movie.runtime}
            year={movie.release_date}
            tagline={movie.tagline}
          />
        ) : (
          <Banner>
            <Title>{title}</Title>
            <SearchFormContainer action="#" method="get" />
          </Banner>
        )}
      </Container>
      <FormAddContainer visibility={visibility} handleToggleVisibility={handleToggleVisibility} />
    </Wrapper>
  );
};

export default memo(Header);
