export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <figure>
      <img src={image} alt={title} />
      <figcaption>
        {title} - {artist}
      </figcaption>
    </figure>
  );
}
