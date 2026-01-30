import * as React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    loadEpisodeCollection(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      onPageChange={handlePageChange}
    />
  );
};
