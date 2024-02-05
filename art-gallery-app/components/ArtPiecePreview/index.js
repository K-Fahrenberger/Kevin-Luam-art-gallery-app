import styled from "styled-components";
import Image from "next/image";

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  max-width: 10%;
  height: auto;
`;

const Figcaption = styled.figcaption`
  margin-top: 10px;
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
      <StyledImage src={image} alt={title} height={height} width={width} />
      <figcaption>
        {title} - {artist}
      </figcaption>
    </Card>
  );
}
