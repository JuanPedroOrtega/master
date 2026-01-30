import { Episode, EpisodeResponse } from '#core/model/episode.model';
import { EpisodeEntityVm, EpisodeCollectionVm } from './episode-collection.vm';

export const mapEpisodeFromApiToVm = (episode: Episode): EpisodeEntityVm => ({
  id: episode.id.toString(),
  name: episode.name,
  episode: episode.episode,
  airDate: episode.air_date,
  characterCount: episode.characters.length,
});

export const mapEpisodeCollectionFromApiToVm = (
  response: EpisodeResponse,
  currentPage: number
): EpisodeCollectionVm => ({
  episodes: response.results.map(mapEpisodeFromApiToVm),
  info: {
    count: response.info.count,
    pages: response.info.pages,
    currentPage,
    hasNext: response.info.next !== null,
    hasPrev: response.info.prev !== null,
  },
});
