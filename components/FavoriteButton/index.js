import { ReactComponent as HeartFilled } from "resources/assets/heart-filled.svg";
import { ReactComponent as HeartOutline } from "resources/assets/heart-outline.svg";

export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button 
    className="favorite-button"
    aria-label="Favorite this art piece"
    onClick={onClick}>
      {isFavorite ? <HeartFilled /> : <HeartOutline />}
    </button>
  );
}