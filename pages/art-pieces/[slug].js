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
  const { image, title, artist, year, genre, width, height } = currentPiece;

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
        title={title}
        artist={artist}
        year={year}
        genre={genre}
        width={width}
        height={height}
      />
    </>
  );
}
