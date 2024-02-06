import Image from "next/image";
import { ReactComponent as HeartFilled } from "public/resources/assets/heart-filled.svg";
import { ReactComponent as HeartOutline } from "public/resources/assets/heart-outline.svg";

export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button
      className="favorite-button"
      aria-label="Favorite this art piece"
      onClick={onClick}
    >
      {isFavorite ? <HeartFilled /> : <HeartOutline />}
      <Image
        alt="heart"
        width={20}
        height={20}
      />
    </button>
  );
}
