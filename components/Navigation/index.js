import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff; /* Set your desired background color */
  padding: 10px;
  z-index: 1; /* Set a higher z-index to ensure it's above other elements */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledItem = styled.li`
  margin-right: 10px; /* Adjust the spacing between items as needed */
  &:not(:last-child) {
    border-right: 1px solid #ccc; /* Add a vertical line between items */
    padding-right: 10px; /* Add padding to the right of each item */
  }
`;

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNav>
      <StyledList>
        <StyledItem>
          <Link href={"/art-pieces"}>Gallery</Link>
        </StyledItem>
        <StyledItem>
          <Link href={"/"}>Spotlight</Link>
        </StyledItem>
        {/* <StyledItem><Link>Favorites</Link></StyledItem> */}
      </StyledList>
    </StyledNav>
  );
}
