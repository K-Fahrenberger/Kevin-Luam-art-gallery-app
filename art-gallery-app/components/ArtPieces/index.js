import styled from "styled-components";
import ArtpiecePreview from "../ArtPiecePreview/index.js";

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledItems = styled.li``;

export default function ArtPieces({ pieces }) {
  return (
    <>
      <StyledList>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtpiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
            />
          </li>
        ))}
      </StyledList>
    </>
  );
}
