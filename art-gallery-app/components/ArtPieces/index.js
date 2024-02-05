import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/index.js";

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
            <ArtPiecePreview
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
