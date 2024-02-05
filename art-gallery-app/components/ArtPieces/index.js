import ArtpiecePreview from "../ArtPiecePreview/index.js";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtpiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
