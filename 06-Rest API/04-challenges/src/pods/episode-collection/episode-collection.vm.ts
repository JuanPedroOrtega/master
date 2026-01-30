export interface EpisodeEntityVm {
  id: string;
  name: string;
  episode: string;
  airDate: string;
  characterCount: number;
}

export interface EpisodeCollectionVm {
  episodes: EpisodeEntityVm[];
  info: {
    count: number;
    pages: number;
    currentPage: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
