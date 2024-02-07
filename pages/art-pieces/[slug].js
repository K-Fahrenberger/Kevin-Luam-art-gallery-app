import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  // hooks
  const router = useRouter();
  const { slug } = router.query;

  // init relevant vars
  const index = pieces.findIndex((piece) => piece.slug === slug);
  const currentPiece = pieces[index];
  console.log(currentPiece);
  const { imageSource, dimensions, name, artist, year, genre } = currentPiece;

  // error msg for invalid slug
  if (!currentPiece) {
    return (
      <>
        <h1>This art piece does not exist</h1>;
      </>
    );
  }

  return (
    <>
      <ArtPieceDetails
        image={imageSource}
        width={dimensions.width}
        height={dimensions.height}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
}
