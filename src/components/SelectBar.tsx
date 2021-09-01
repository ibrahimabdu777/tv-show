import { ChangeEventHandler } from "react";
import { IEpisode } from "./Episode";

interface SelectBarProps {
  select: string;
  handleSelectChange: ChangeEventHandler;
  data: IEpisode[];
  selectedShow: string;
}

export default function SelectBar({
  select,
  handleSelectChange,
  data,
  selectedShow,
}: SelectBarProps): JSX.Element {
  return (
    <>
      <select
        value={select}
        onChange={handleSelectChange}
        disabled={selectedShow === "default"}
      >
        <option value="default">Please select an episode</option>
        {data.map((episode, idx) => (
          <option value={episode.name} key={idx}>
            {idx + 1} {episode.name}
          </option>
        ))}
      </select>
    </>
  );
}
