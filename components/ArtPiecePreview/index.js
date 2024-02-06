import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export const Card = styled.figure`
  display: table;
`;

export const ImageContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
margin-top: 1rem;
width: 100%
height: 100%`;

export const StyledImage = styled(Image)`
  max-width: 70vw;
  margin-top: 5px;
  &:first-child {
    margin-top: 50px;
  }
  height: auto;
`;

export const Caption = styled.figcaption`
  display: table-caption;
  caption-side: bottom;
  margin: 3px auto;
  padding: 3px 5px;
  background-color: lightgray;
  color: black;
`;

export default function ArtPiecePreview({
  image,
  width,
  height,
  title,
  artist,
  isFavorite,
}) {
  return (
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
        {`"${title}"`} <br />
        {`Artist: ${artist}`}
      </Caption>
    </Card>
  );
}

// export const Card = styled.figure`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const Card = styled.figure`
// position: relative;
// width: 100%
// height: 100%
// `;
