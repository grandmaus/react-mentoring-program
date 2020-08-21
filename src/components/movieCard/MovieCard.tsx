import React, { FC } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.a`
  display: block;
  width: 320px;
  height: 450px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type Props = {
  title: string;
  image: string;
  genre: string;
  year: string;
  url: string;
};

export const MovieCard: FC<Props> = ({ title, image, genre, year, url }) => (
  <article>
    <ImageContainer href={url} target="_blank">
      <Image src={image} alt={title} />
    </ImageContainer>
    <div>
      <div>
        <h2>{title}</h2>
        <p>{genre}</p>
      </div>
      <span>{year}</span>
    </div>
  </article>
);
