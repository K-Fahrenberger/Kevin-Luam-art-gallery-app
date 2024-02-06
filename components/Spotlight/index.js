import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  Card,
  ImageContainer,
  StyledImage,
  Caption,
} from "../ArtPiecePreview/index.js";
import FavoriteButton from "../FavoriteButton/index.js";

const SpotlightContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Spotlight({ image, title, artist, width, height }) {
  return (
    <SpotlightContainer>
      <Card>
        <ImageContainer>
          <StyledImage
            src={image}
            alt={`Art piece by ${artist}`}
            width={width}
            height={height}
          />
        </ImageContainer>
        <Caption>
        <FavoriteButton />
          {`"${title}"`} <br />
          {`Artist: ${artist}`}
        </Caption>
      </Card>
    </SpotlightContainer>
  );
}
