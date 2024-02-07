import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 1vw;
  left: 1vw;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function BackButton() {
  return (
    <StyledButton>
      <Link href={"/art-pieces"}>
        <Image
          src="/assets/back-button.svg"
          alt="Navigate back to gallery"
          width={24}
          height={24}
        />
      </Link>
    </StyledButton>
  );
}
