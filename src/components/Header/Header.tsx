import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { CommonButton } from '../CommonButton/CommonButton';
import { SearchForm } from '../SearchForm/SearchForm';
import { Wrapper } from './styles/Wrapper';
import { Container } from './styles/Container';
import { Banner } from './styles/Banner';
import { Title } from './styles/Title';
import { Row } from './styles/Row';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { SearchButton } from './styles/SearchButton';
import movies from '../movies';

const stylesButton = {
  width: '200px',
  color: '#f65251',
  background: 'rgba(0, 0, 0, 0.5)',
  borderColor: 'transparent'
};

type Props = {
  title: string;
  isShowDetails: boolean;
  returnToSearch: () => void;
};

export const Header: FC<Props> = ({ title, isShowDetails, returnToSearch }) => (
  <Wrapper isShowDetails={isShowDetails}>
    <Container>
      <Row>
        <Logo url="/" alt="Netflix Roulette" />
        {isShowDetails ? (
          <SearchButton type="button" onClick={returnToSearch}>
            Search
          </SearchButton>
        ) : (
          <CommonButton text="Add Movie" styles={stylesButton} />
        )}
      </Row>
      {isShowDetails ? (
        <MovieDetails
          title={movies[0].title}
          image={movies[0].poster_path}
          overview={movies[0].overview}
          rating={movies[0].vote_average}
          runtime={movies[0].runtime}
          year={movies[0].release_date}
          tagline={movies[0].tagline}
        />
      ) : (
        <Banner>
          <Title>{title}</Title>
          <SearchForm action="#" method="get" />
        </Banner>
      )}
    </Container>
  </Wrapper>
);
