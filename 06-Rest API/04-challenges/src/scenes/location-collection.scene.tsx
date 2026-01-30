import React from 'react';
import { LocationCollectionContainer } from '#pods/location-collection';
import { AppLayout } from '#layouts';

export const LocationCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <LocationCollectionContainer />
    </AppLayout>
  );
};
