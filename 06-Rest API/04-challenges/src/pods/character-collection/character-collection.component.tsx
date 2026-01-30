import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { CharacterCollectionVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterCollectionVm;
  onCharacterClick: (id: string) => void;
  onPageChange: (page: number) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characterCollection,
  onCharacterClick,
  onPageChange,
  searchTerm,
  onSearchChange,
}) => {
  const { characters, info } = characterCollection;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Rick & Morty Characters
      </Typography>
      
      <TextField
        fullWidth
        label="Search characters"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Type a character name..."
        style={{ marginBottom: '1rem' }}
      />

      <Typography variant="body2" color="textSecondary" gutterBottom>
        {characters.length > 0 
          ? `Total: ${info.count} characters | Page ${info.currentPage} of ${info.pages}`
          : 'No characters found'
        }
      </Typography>

      {characters.length > 0 ? (
        <>
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
        </>
      ) : (
        <Typography variant="body1" style={{ marginTop: '2rem', textAlign: 'center' }}>
          No characters found. Try a different search term.
        </Typography>
      )}
    </div>
  );
};
