import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/index.js";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  gap: 1rem;
  padding: 0;
`;

const StyledItems = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ArtPieces({ pieces }) {
  return (
    <>
      <StyledList>
        {pieces.map((piece) => (
          <StyledItems key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              title={piece.name}
              artist={piece.artist}
              isFavorite={piece.isFavorite}
            />
          </StyledItems>
        ))}
      </StyledList>
    </>
  );
}
