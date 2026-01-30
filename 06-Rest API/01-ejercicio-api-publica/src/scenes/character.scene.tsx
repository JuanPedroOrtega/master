import React from 'react';
import { CharacterContainer } from '#pods/character';
import { AppLayout } from '#layouts';

export const CharacterScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterContainer />
    </AppLayout>
  );
};
