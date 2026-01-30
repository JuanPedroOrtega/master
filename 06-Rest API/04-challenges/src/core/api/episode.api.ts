import { Episode, EpisodeResponse } from '#core/model/episode.model';
import Axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const episodeApi = {
  getEpisodes: async (page: number = 1): Promise<EpisodeResponse> => {
    const { data } = await Axios.get<EpisodeResponse>(
      `${baseURL}/episode`,
      {
        params: { page },
      }
    );
    return data;
  },

  getEpisodeById: async (id: string): Promise<Episode> => {
    const { data} = await Axios.get<Episode>(`${baseURL}/episode/${id}`);
    return data;
  },
};
