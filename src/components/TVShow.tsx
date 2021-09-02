interface TVShowProps {
  name: string;
  image: string;
  summary: string;
  genres: string[];
  status: string;
  rating: number | null;
  runtime: number | null;
  handleShowClick: React.MouseEventHandler<HTMLHeadingElement>;
  id: number;
}

export default function TVShow({
  name,
  image,
  summary,
  genres,
  status,
  rating,
  runtime,
  handleShowClick,
  id,
}: TVShowProps): JSX.Element {
  return (
    <>
      <h2 onClick={handleShowClick} id={id.toString()}>
        {name}
      </h2>
      <img src={image} alt="" />
      <p>{summary}</p>
      <p>
        Genres: {genres}, Status: {status}, Rating: {rating}, Runtime: {runtime}
      </p>
    </>
  );
}
