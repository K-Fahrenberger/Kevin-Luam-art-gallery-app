import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 0.8vw;
  right: 0.5vw;
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  max-width: 2.4vw;
  height: auto;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // const [isFavorite, setIsFavorite] = useState(false);
  // const toggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };
  return (
    <StyledButton
      className="favorite-button"
      aria-label="Save this art piece as favorite"
      onClick={onToggleFavorite}
    >
      {isFavorite ? (
        <StyledImage
          src="/assets/heart-filled.svg"
          alt="A filled heart"
          width={24}
          height={24}
        />
      ) : (
        <StyledImage
          src="/assets/heart-outline.svg"
          alt="An outlined heart"
          width={24}
          height={24}
        />
      )}
    </StyledButton>
  );
}
