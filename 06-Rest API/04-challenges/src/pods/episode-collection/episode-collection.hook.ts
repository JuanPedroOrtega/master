import * as React from 'react';
import { EpisodeCollectionVm } from './episode-collection.vm';
import { episodeApi } from '#core/api/episode.api';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeCollectionVm>({
    episodes: [],
    info: {
      count: 0,
      pages: 0,
      currentPage: 1,
      hasNext: false,
      hasPrev: false,
    },
  });

  const loadEpisodeCollection = async (page: number = 1) => {
    try {
      const result = await episodeApi.getEpisodes(page);
      setEpisodeCollection(mapEpisodeCollectionFromApiToVm(result, page));
    } catch (error) {
      console.error('Error loading episodes:', error);
    }
  };

  return { episodeCollection, loadEpisodeCollection };
};
