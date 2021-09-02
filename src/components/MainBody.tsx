import ListOfEpisodes from "./ListOfEpisodes";
import SearchBar from "./SearchBar";
import React, { useState, ChangeEvent, useEffect } from "react";
import SelectBar from "./SelectBar";
import { IEpisode } from "./Episode";
import ShowSelector from "./ShowSelector";
import ShowsListing from "./ShowsListing";

export default function MainBody(): JSX.Element {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<string>("default");
  const [data, setData] = useState<IEpisode[]>([]);
  const [selectedShow, setSelectedShow] = useState("default");

  function handleSearchBarChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function handleSelectChange(e: ChangeEvent<HTMLInputElement>) {
    setSelect(e.target.value);
    setSearch("");
  }
  function handleResetButtonClick() {
    setSelect("default");
    setSearch("");
  }
  function handleShowSelected(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedShow(e.target.value);
    setSearch("");
    setSelect("default");
  }
  function handleShowClick(e: React.MouseEvent<HTMLHeadingElement>) {
    console.log(e.currentTarget.id);
    setSelectedShow(e.currentTarget.id);
  }
  function handleButtonAllShowsClick(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedShow("default");
  }
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${selectedShow}/episodes`
      );
      const jsonBody: IEpisode[] = await response.json();
      console.log(jsonBody);
      setData((data) => [...jsonBody]);
    };
    getData();
  }, [selectedShow]);

  return (
    <>
      {selectedShow === "default" && (
        <ShowsListing handleShowClick={handleShowClick} />
      )}
      {selectedShow !== "default" && (
        <ShowSelector
          selectedShow={selectedShow}
          handleShowSelected={handleShowSelected}
        />
      )}
      {selectedShow !== "default" && (
        <SelectBar
          select={select}
          handleSelectChange={handleSelectChange}
          data={data}
          selectedShow={selectedShow}
        />
      )}
      {selectedShow !== "default" && (
        <SearchBar
          handleSearchBarChange={handleSearchBarChange}
          search={search}
          selectedShow={selectedShow}
        />
      )}

      {selectedShow !== "default" && (
        <ListOfEpisodes
          search={search}
          select={select}
          handleResetButtonClick={handleResetButtonClick}
          data={data}
          handleButtonAllShowsClick={handleButtonAllShowsClick}
        />
      )}
    </>
  );
}
