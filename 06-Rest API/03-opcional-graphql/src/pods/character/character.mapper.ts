import { Character, CharacterWithSentences } from '#core/model/character.model';
import { CharacterDetail } from './character.vm';

export const mapCharacterFromApiToVm = (character: Character | CharacterWithSentences): CharacterDetail => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type || 'N/A',
  gender: character.gender,
  origin: character.origin.name,
  location: character.location.name,
  image: character.image,
  episodeCount: character.episode.length,
  created: new Date(character.created).toLocaleDateString(),
  bestSentences: 'bestSentences' in character ? character.bestSentences : [],
});

export const mapCharacterFromVmToApi = (character: CharacterDetail): Partial<CharacterWithSentences> => ({
  id: parseInt(character.id),
  bestSentences: character.bestSentences,
});
