import { ChangeEventHandler } from "react";
import TVShows from "../TVShows.json";
interface ShowSelectorProps {
  selectedShow: string;
  handleShowSelected: ChangeEventHandler<HTMLSelectElement>;
}
interface TVShow {
  name: string;
}

export default function ShowSelector({
  selectedShow,
  handleShowSelected,
}: ShowSelectorProps): JSX.Element {
  const sortedTVShows = TVShows.sort(function (a: TVShow, b: TVShow) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <>
      <select value={selectedShow} onChange={handleShowSelected}>
        <option value="default">Please select a show</option>
        {sortedTVShows.map((show) => (
          <option value={show.id} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>
    </>
  );
}
