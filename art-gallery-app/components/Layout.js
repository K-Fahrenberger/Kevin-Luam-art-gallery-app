// import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

// const Title = styled.h1`
//   text-align: center;
// `;

export default function Layout({children}) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Navigation />
      <Main>{children}</Main>
    </Container>
  );
}
