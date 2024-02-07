import Link from "next/link";
import styled from "styled-components";
// import React, { useState, useEffect } from "react";
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

export const CaptionContainer = styled.div`
  position: relative;
`;

export default function Spotlight({
  slug,
  image,
  title,
  artist,
  width,
  height,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <SpotlightContainer>
      <Card>
        <ImageContainer>
          <Link href={`/art-pieces/${slug}`}>
            <StyledImage
              src={image}
              alt={`Art piece by ${artist}`}
              width={width}
              height={height}
            />
          </Link>
        </ImageContainer>
        <CaptionContainer>
          <Caption>
            {`"${title}"`} <br />
            {`Artist: ${artist}`}
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </Caption>
        </CaptionContainer>
      </Card>
    </SpotlightContainer>
  );
}
