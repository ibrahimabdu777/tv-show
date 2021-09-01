export interface IEpisode {
  key?: number;
  id?: number;
  url?: string;
  name: string;
  season?: number;
  number?: number;
  type?: string;
  airdate?: string;
  airtime?: string;
  airstamp?: string;
  runtime?: number;
  image?: {
    medium?: string;
    original?: string;
  };
  summary: string;
  _links?: { self: { href: string } };
}

export default function Episode({
  name,
  season,
  number,
  image,
  summary,
}: IEpisode): JSX.Element {
  const regex1 = /<p>/gi;
  const regex2 = /<\/p>/gi;
  const regex3 = /<br>/gi;
  const strippedDescriptionInitial = summary
    ? summary.replace(regex1, "")
    : summary;
  const strippedDescrpitionInitial2 = summary
    ? strippedDescriptionInitial?.replace(regex3, "")
    : summary;
  const strippedDescriptionFinal = summary
    ? strippedDescrpitionInitial2?.replace(regex2, "")
    : summary;

  return (
    <>
      <h2>
        {name} - S0{season}E0{number}
      </h2>
      {image && <img src={image.medium} alt="episdoe " />}
      <p>{strippedDescriptionFinal}</p>
    </>
  );
}
