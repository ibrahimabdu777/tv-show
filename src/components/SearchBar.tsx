export default function SearchBar({handleSearchBarChange , search}:any):JSX.Element {
    return <input type="text" value={search} onChange={handleSearchBarChange} ></input>
}