import styled from "styled-components";
import Link from "next/link.js";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";
import { CaptionContainer } from "../Spotlight/index.js";

export const Card = styled.figure`
  display: table;
`;

export const Caption = styled.figcaption`
  display: table-caption;
  caption-side: bottom;
  width: 100%;
  margin: 3px auto;
  padding: 8px 8px;
  background-color: lightgray;
  color: black;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  max-width: 70vw;
  margin-top: 5px;
  &:first-child {
    margin-top: 50px;
  }
  height: auto;
`;

export default function ArtPiecePreview({
  slug,
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
          <FavoriteButton isFavorite={isFavorite} />
        </Caption>
      </CaptionContainer>
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
