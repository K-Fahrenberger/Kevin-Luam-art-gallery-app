import Image from "next/image";
import styled from "styled-components";
import { ReactComponent as HeartFilled } from "public/resources/assets/heart-filled.svg";
import { ReactComponent as HeartOutline } from "public/resources/assets/heart-outline.svg";

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <StyledButton
      className="favorite-button"
      aria-label="Save as favorite"
      onClick={onClick}
    >
      {isFavorite ? <HeartFilled /> : <HeartOutline />}
      <Image alt="heart" width={20} height={20} />
    </StyledButton>
  );
}
