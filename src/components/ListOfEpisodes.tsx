import episodes from '../episodes.json'
import Episode from './Episode'
 
interface EpisodeList {
    search: string
}
export default function ListOfEpisodes({search}:EpisodeList): JSX.Element{
    
    
    return <>
        {episodes.map((episode )=> (episode.name.toLowerCase().includes(search.toLowerCase()) || episode.summary.toLowerCase().includes(search.toLowerCase())) && <Episode name={episode.name} key={episode.id} season={episode.season} number={episode.number} image={episode.image} summary={episode.summary}/>)}
    </>
    
    
}