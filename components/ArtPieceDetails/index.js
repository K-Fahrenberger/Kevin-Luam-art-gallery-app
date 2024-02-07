import styled from "styled-components";
import { Card, ImageContainer, StyledImage } from "../ArtPiecePreview/index.js";
import FavoriteButton from "../FavoriteButton/index.js";
import React from "react"; // Add the missing import statement for React
// import {styles} from "/styles"

const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsCaption = styled.figcaption`
  display: table-caption;
  caption-side: bottom;
  background-color: lightgray;
  color: black;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
  isFavorite
}) {
  return (
    <DetailsContainer>
      <Card>
        <ImageContainer>
          <StyledImage
            src={image}
            alt={`Art piece by ${artist}`}
            width={width}
            height={height}
          />
        </ImageContainer>
        <DetailsCaption>
        <FavoriteButton isFavorite={isFavorite}/>
          {`"${title}"`} <br />
          {`Artist: ${artist}`} <br />
          {`Year: ${year}`} <br />
          {`Genre: ${genre}]`}
        </DetailsCaption>
      </Card>
    </DetailsContainer>
  );
}
// tip