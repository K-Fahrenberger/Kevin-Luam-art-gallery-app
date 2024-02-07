import styled from "styled-components";
import { Card, ImageContainer, StyledImage } from "../ArtPiecePreview/index.js";
import { CaptionContainer } from "../Spotlight/index.js";
import BackButton from "../BackButton/index.js";
import FavoriteButton from "../FavoriteButton/index.js";

const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsCaption = styled.figcaption`
  display: table-caption;
  caption-side: bottom;
  width: 100%;
  margin: 3px auto;
  padding: 8px 8px;
  background-color: lightgray;
  color: black;
`;

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <DetailsContainer>
      <BackButton />
      <Card>
        <ImageContainer>
          <StyledImage
            src={image}
            alt={`Art piece by ${artist}`}
            width={width}
            height={height}
          />
        </ImageContainer>
        <CaptionContainer>
          <DetailsCaption>
            {`"${title}"`} <br />
            {`Artist: ${artist}`} <br />
            {`Year: ${year}`} <br />
            {`Genre: ${genre}`}
            <FavoriteButton isFavorite={isFavorite} onToggleFavorite={() => onToggleFavorite(slug)}/>
          </DetailsCaption>
        </CaptionContainer>
      </Card>
    </DetailsContainer>
  );
}
