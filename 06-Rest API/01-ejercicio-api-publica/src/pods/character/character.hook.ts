import * as React from 'react';
import { CharacterDetail, createEmptyCharacter } from './character.vm';
import { characterApi } from '#core/api/character.api';
import { mapCharacterFromApiToVm } from './character.mapper';

export const useCharacter = (id: string) => {
  const [character, setCharacter] = React.useState<CharacterDetail>(createEmptyCharacter());
  const [loading, setLoading] = React.useState(false);

  const loadCharacter = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const result = await characterApi.getCharacterById(id);
      setCharacter(mapCharacterFromApiToVm(result));
    } catch (error) {
      console.error('Error loading character:', error);
    } finally {
      setLoading(false);
    }
  };

  return { character, setCharacter, loadCharacter, loading };
};
