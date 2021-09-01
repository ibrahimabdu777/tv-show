interface SearchBarProps {
  handleSearchBarChange: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
  selectedShow: string;
}

export default function SearchBar({
  handleSearchBarChange,
  search,
  selectedShow,
}: SearchBarProps): JSX.Element {
  return (
    <input
      type="text"
      value={search}
      onChange={handleSearchBarChange}
      disabled={selectedShow === "default"}
    ></input>
  );
}
