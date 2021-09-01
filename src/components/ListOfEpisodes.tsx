import Episode, { IEpisode } from "./Episode";


interface EpisodeList {
  search: string;
  select: string;
  handleResetButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  data: IEpisode[]
}
export default function ListOfEpisodes({ search, select, handleResetButtonClick, data }: EpisodeList): JSX.Element {


  const searchItems = data.filter(
    (episode) =>
      episode.name.toLowerCase().includes(search.toLowerCase()) ||
      episode.summary.toLowerCase().includes(search.toLowerCase())
  );

  const selectedItem = data.filter(episode => episode.name === select)

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
      
      <p>there are {searchItems.length}/73 episodes matching your search</p>
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
