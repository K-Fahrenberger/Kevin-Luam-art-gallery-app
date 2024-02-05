import styled from "styled-components";
import Image from "next/image";

const Card = styled.figure`
  display: flex;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
}) {
  return (
    <Card>
      <Image
        src={image}
        alt={title}
        height={height}
        width={width}
      />
      <figcaption>
        {title} - {artist}
      </figcaption>
    </Card>
  );
}
