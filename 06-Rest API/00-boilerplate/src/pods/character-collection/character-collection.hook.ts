import * as React from 'react';
import { CharacterCollectionVm } from './character-collection.vm';
import { characterApi } from '#core/api/character.api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterCollectionVm>({
    characters: [],
    info: {
      count: 0,
      pages: 0,
      currentPage: 1,
      hasNext: false,
      hasPrev: false,
    },
  });

  const loadCharacterCollection = async (page: number = 1) => {
    try {
      const result = await characterApi.getCharacters(page);
      setCharacterCollection(mapCharacterCollectionFromApiToVm(result, page));
    } catch (error) {
      console.error('Error loading characters:', error);
    }
  };

  return { characterCollection, loadCharacterCollection };
};
