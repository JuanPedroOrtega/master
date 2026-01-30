import React from 'react';
import { EpisodeCollectionContainer } from '#pods/episode-collection';
import { AppLayout } from '#layouts';

export const EpisodeCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <EpisodeCollectionContainer />
    </AppLayout>
  );
};
