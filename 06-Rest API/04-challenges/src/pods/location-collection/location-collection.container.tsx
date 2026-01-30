import * as React from 'react';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer = () => {
  const { locationCollection, loadLocationCollection } = useLocationCollection();
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    loadLocationCollection(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      onPageChange={handlePageChange}
    />
  );
};
