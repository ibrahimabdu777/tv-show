import React from "react";
import TVShows from "../TVShows.json";
import TVShow from "./TVShow";

interface ShowsListingProps {
  handleShowClick: React.MouseEventHandler<HTMLHeadingElement>;
}

export default function ShowsListing({
  handleShowClick,
}: ShowsListingProps): JSX.Element {
  return (
    <>
      {TVShows.map((show) => (
        <TVShow
          name={show.name}
          image={show.image.medium}
          summary={show.summary}
          genres={show.genres}
          status={show.status}
          rating={show.rating.average}
          runtime={show.runtime}
          handleShowClick={handleShowClick}
          id={show.id}
          key={show.id}
        />
      ))}
    </>
  );
}
