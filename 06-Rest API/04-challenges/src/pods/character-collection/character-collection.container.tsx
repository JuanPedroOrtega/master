import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, searchTerm, setSearchTerm } = useCharacterCollection();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadCharacterCollection(currentPage, searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [currentPage, searchTerm]);

  const handleCharacterClick = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCharacterClick={handleCharacterClick}
      onPageChange={handlePageChange}
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
    />
  );
};
