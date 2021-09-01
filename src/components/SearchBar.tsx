interface SearchBarProps {
  handleSearchBarChange: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
}

export default function SearchBar({
  handleSearchBarChange,
  search,
}: SearchBarProps): JSX.Element {
  return (
    <input type="text" value={search} onChange={handleSearchBarChange}></input>
  );
}
