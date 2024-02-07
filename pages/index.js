import Head from "next/head.js";
import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <>
      <Head>
        <title>Spotlight</title>
      </Head>
      {randomPiece && (
        <Spotlight
          slug={randomPiece.slug}
          image={randomPiece.imageSource}
          title={randomPiece.name}
          artist={randomPiece.artist}
          width={randomPiece.dimensions.width}
          height={randomPiece.dimensions.height}
          onToggleFavorite={(e) => {
            e.preventDefault();
            onToggleFavorite(randomPiece.slug);
          }}
        />
      )}
    </>
  );
}
