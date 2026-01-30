import React from 'react';
import { CharacterCollectionContainer } from '#pods/character-collection';
import { AppLayout } from '#layouts';

export const CharacterCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterCollectionContainer />
    </AppLayout>
  );
};
