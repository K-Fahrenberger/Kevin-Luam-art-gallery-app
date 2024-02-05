import useSWR from "swr";
import Link from "next/link";
import ArtPieces from "@/components/ArtPieces";

const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(url);
  console.log("data ", data);

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
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
      <Link href="/artpieces">Art Pieces</Link>
    </div>
  );
}
