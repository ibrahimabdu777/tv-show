import episodes from "../episodes.json";
import Episode from "./Episode";

interface EpisodeList {
  search: string;
  select: any;
  handleResetButtonClick: any,
}
export default function ListOfEpisodes({ search, select, handleResetButtonClick }: EpisodeList): JSX.Element {
  const searchItems = episodes.filter(
    (episode) =>
      episode.name.toLowerCase().includes(search.toLowerCase()) ||
      episode.summary.toLowerCase().includes(search.toLowerCase())
  );

  const selectedItem = episodes.filter(episode => episode.name === select)

  return (
    <>
      {/* //episodes.map((episode )=> (episode.name.toLowerCase().includes(search.toLowerCase()) || episode.summary.toLowerCase().includes(search.toLowerCase())) && <Episode name={episode.name} key={episode.id} season={episode.season} number={episode.number} image={episode.image} summary={episode.summary}/>)} */}
      {(select !== 'default') &&<button onClick={handleResetButtonClick}> Show all episodes</button>}

      { selectedItem.map((episode) => (
        <Episode
          name={episode.name}
          key={episode.id}
          season={episode.season}
          number={episode.number}
          image={episode.image}
          summary={episode.summary}
        />
      ))}
      
      <p>there are {searchItems.length} episodes matching your search</p>
      {(select === 'default' ) && searchItems.map((episode) => (
        <Episode
          name={episode.name}
          key={episode.id}
          season={episode.season}
          number={episode.number}
          image={episode.image}
          summary={episode.summary}
        />
      ))}
    </>
  );
}
