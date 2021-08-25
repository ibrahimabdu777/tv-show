import { ChangeEventHandler } from "react";
import episodes from "../episodes.json";

interface SelectBar {
    select: string;
    handleSelectChange: ChangeEventHandler
}
export default function SelectBar({
  select,
  handleSelectChange,
}: SelectBar): JSX.Element {
  return (
    <>
      <select value={select} onChange={handleSelectChange}>
        <option value="default">Please select an episode</option>
        {episodes.map((episode, idx) => (
          <option value={episode.name} key={idx}>
            {idx + 1} {episode.name}
          </option>
        ))}
      </select>
    </>
  );
}
