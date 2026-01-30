import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CharacterCollectionVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterCollectionVm;
  onCharacterClick: (id: string) => void;
  onPageChange: (page: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characterCollection,
  onCharacterClick,
  onPageChange,
}) => {
  const { characters, info } = characterCollection;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Rick & Morty Characters
      </Typography>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Total: {info.count} characters | Page {info.currentPage} of {info.pages}
      </Typography>

      <ul className={classes.list}>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onClick={onCharacterClick} />
          </li>
        ))}
      </ul>

      <div className={classes.pagination}>
        <Button
          variant="contained"
          disabled={!info.hasPrev}
          onClick={() => onPageChange(info.currentPage - 1)}
        >
          Previous
        </Button>
        
        <Typography>
          Page {info.currentPage} of {info.pages}
        </Typography>
        
        <Button
          variant="contained"
          disabled={!info.hasNext}
          onClick={() => onPageChange(info.currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
