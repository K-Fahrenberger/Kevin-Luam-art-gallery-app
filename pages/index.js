import Head from "next/head.js";
import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <>
      <Head>
        <title>Spotlight</title>
      </Head>
      {randomPiece && (
        <Spotlight
          image={randomPiece.imageSource}
          title={randomPiece.name}
          artist={randomPiece.artist}
          width={randomPiece.dimensions.width}
          height={randomPiece.dimensions.height}
        />
      )}
    </>
  );
}
