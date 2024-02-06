import Link from "next/link";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  // hooks
  const router = useRouter();
  const { slug } = router.query;

  // init relevant vars
  const index = pieces.findIndex((piece) => piece.slug === slug);
  const currentPiece = pieces[index];
  const { image, width, height, title, artist, year, genre } = currentPiece;

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
        image={image}
        width={width}
        height={height}
        title={title}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
}
