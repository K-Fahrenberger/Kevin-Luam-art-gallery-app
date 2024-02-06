import useSWR from "swr";
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // fetching data
  const { data, isLoading, error } = useSWR(url, fetcher);
  console.log("data ", data);

  // create global state
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  // toggle favorite button
  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) => {
      const existingPieceIndex = prevArtPiecesInfo.findIndex((piece) => piece.slug === slug);
  
      if (existingPieceIndex !== -1) {
        // Art piece found, update its isFavorite property
        return prevArtPiecesInfo.map((piece, index) =>
          index === existingPieceIndex
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );
      } else {
        // Art piece not found, add a new one
        return [...prevArtPiecesInfo, { slug, isFavorite: true }];
      }
    });
  }
  

  // loading & error msg
  if (isLoading)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...</h1>
    );
  if (error)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>
        {error.message}
      </h1>
    );
  return (
    <>
      <Layout>
        <SWRConfig value={{ fetcher }}>
          <GlobalStyle />
          <Component
            {...pageProps}
            pieces={data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
