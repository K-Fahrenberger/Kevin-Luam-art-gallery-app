import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onArtPiecesInfo,
}) {
    const favorites = artPiecesInfo.filter((piece) => artPiecesInfo.find(
        (piece) => piece.slug===piece.slug&&piece.isFavorite)
    );
  return (
    <>
      <ArtPieces
        pieces={pieces}
        onArtPiecesInfo={onArtPiecesInfo}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
