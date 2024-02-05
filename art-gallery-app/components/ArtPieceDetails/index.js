import styled from "styled-components";
import { useRouter } from 'next/router'
import { Card, StyledImage } from "../ArtPiecePreview/index.js";

export default function ArtPieceDetail({
  image,
  title,
  artist,
  year,
  genre,
  height,
  width,
}) {
  return (
    <Card>
      <StyledImage src={image} alt={title} height={height} width={width} />
      <figcaption>
        {title} by {artist}
        {year} - {genre}
      </figcaption>
    </Card>
  );
}
