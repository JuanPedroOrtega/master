import { Character, CharacterResponse } from '#core/model/character.model';
import { CharacterEntityVm, CharacterCollectionVm } from './character-collection.vm';

export const mapCharacterFromApiToVm = (character: Character): CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
  location: character.location.name,
});

export const mapCharacterCollectionFromApiToVm = (
  response: CharacterResponse,
  currentPage: number
): CharacterCollectionVm => ({
  characters: response.results.map(mapCharacterFromApiToVm),
  info: {
    count: response.info.count,
    pages: response.info.pages,
    currentPage,
    hasNext: response.info.next !== null,
    hasPrev: response.info.prev !== null,
  },
});
