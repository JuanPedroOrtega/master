export interface CharacterEntityVm {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: string;
}

export interface CharacterCollectionVm {
  characters: CharacterEntityVm[];
  info: {
    count: number;
    pages: number;
    currentPage: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
