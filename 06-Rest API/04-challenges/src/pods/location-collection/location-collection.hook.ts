import * as React from 'react';
import { LocationCollectionVm } from './location-collection.vm';
import { locationApi } from '#core/api/location.api';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationCollectionVm>({
    locations: [],
    info: {
      count: 0,
      pages: 0,
      currentPage: 1,
      hasNext: false,
      hasPrev: false,
    },
  });

  const loadLocationCollection = async (page: number = 1) => {
    try {
      const result = await locationApi.getLocations(page);
      setLocationCollection(mapLocationCollectionFromApiToVm(result, page));
    } catch (error) {
      console.error('Error loading locations:', error);
    }
  };

  return { locationCollection, loadLocationCollection };
};
