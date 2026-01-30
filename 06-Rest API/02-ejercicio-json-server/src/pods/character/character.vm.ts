export interface CharacterDetail {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episodeCount: number;
  created: string;
  bestSentences: string[];
}

export const createEmptyCharacter = (): CharacterDetail => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: '',
  location: '',
  image: '',
  episodeCount: 0,
  created: '',
  bestSentences: [],
});
