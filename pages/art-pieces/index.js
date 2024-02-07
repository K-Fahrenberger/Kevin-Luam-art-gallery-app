import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
