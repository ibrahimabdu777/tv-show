import ListOfEpisodes from "./ListOfEpisodes";
import SearchBar from "./SearchBar";
import { useState, ChangeEvent, useEffect } from "react";
import SelectBar from "./SelectBar";
import {IEpisode} from './Episode'

export default function MainBody(): JSX.Element {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<string>("default");
  const [data, setData] = useState<IEpisode []>([])
  function handleSearchBarChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function handleSelectChange(e: ChangeEvent<HTMLInputElement> ) {
    setSelect(e.target.value);
    console.log(e.target.value)
  }
  function handleResetButtonClick(){
      setSelect('default')
  }

  useEffect(()=>{
    const getData = async () => {
      const response = await fetch('https://api.tvmaze.com/shows/82/episodes')
      const jsonBody: IEpisode[] =  await response.json()
      console.log(jsonBody)
      setData(data => [...data, ...jsonBody])
    }
    getData()
  }, [])

  return (
    <>
      <SelectBar select={select} handleSelectChange={handleSelectChange} data={data}/>
      <SearchBar
        handleSearchBarChange={handleSearchBarChange}
        search={search}
        
      />
      <ListOfEpisodes search={search} select={select} handleResetButtonClick={handleResetButtonClick} data={data}/>
    </>
  );
}
