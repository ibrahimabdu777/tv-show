import ListOfEpisodes from "./ListOfEpisodes";
import SearchBar from "./SearchBar";
import {useState} from "react"



export default function MainBody():JSX.Element {

    const [search, setSearch] = useState('')
    function handleSearchBarChange(e: any){
        setSearch(e.target.value)
    }

    return <> 
    <SearchBar handleSearchBarChange={handleSearchBarChange} search={search}/>
    <ListOfEpisodes search={search}/>
    </>
    
    
}