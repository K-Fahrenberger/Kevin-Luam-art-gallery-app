import styled from "styled-components";
import { Card, ImageContainer, StyledImage } from "../ArtPiecePreview/index.js";

const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsCaption = styled.figcaption`
  display: table-caption;
  caption-side: bottom;
  margin: 3px auto;
  padding: 3px 5px;
  background-color: lightgray;
  color: black;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  height,
  width,
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
          {`"${title}"`} <br />
          {`Artist: ${artist}`} <br />
          {`Year: ${year}`} <br />
          {`Genre: ${genre}]`}
        </DetailsCaption>
      </Card>
    </DetailsContainer>
  );
}
