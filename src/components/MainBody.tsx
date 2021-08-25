import ListOfEpisodes from "./ListOfEpisodes";
import SearchBar from "./SearchBar";
import { useState, ChangeEvent } from "react";
import SelectBar from "./SelectBar";

export default function MainBody(): JSX.Element {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("default");
  function handleSearchBarChange(e: any) {
    setSearch(e.target.value);
  }
  function handleSelectChange(e: ChangeEvent<HTMLInputElement> ) {
    setSelect(e.target.value);
    console.log(e.target.value)
  }
  function handleResetButtonClick(){
      setSelect('default')
  }

  return (
    <>
      <SelectBar select={select} handleSelectChange={handleSelectChange} />
      <SearchBar
        handleSearchBarChange={handleSearchBarChange}
        search={search}
      />
      <ListOfEpisodes search={search} select={select} handleResetButtonClick={handleResetButtonClick} />
    </>
  );
}
