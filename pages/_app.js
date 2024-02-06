import useSWR from "swr";
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // fetching data
  const { data, isLoading, error } = useSWR(url, fetcher);
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
    <>
      <Layout>
        <SWRConfig value={{ fetcher }}>
          <GlobalStyle />
          <Component {...pageProps} pieces={data} />
        </SWRConfig>
      </Layout>
    </>
  );
}
