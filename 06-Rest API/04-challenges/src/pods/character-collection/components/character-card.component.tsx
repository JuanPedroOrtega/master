import * as React from 'react';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onClick: (id: string) => void;
}

export const CharacterCard: React.FC<Props> = ({ character, onClick }) => {
  const statusClass = character.status.toLowerCase();

  return (
    <div className={classes.card} onClick={() => onClick(character.id)}>
      <img 
        src={character.image} 
        alt={character.name} 
        className={classes.image}
      />
      <div className={classes.content}>
        <h3 className={classes.name}>{character.name}</h3>
        <p className={classes.detail}>
          <span className={`${classes.status} ${statusClass}`}>
            {character.status}
          </span>
        </p>
        <p className={classes.detail}>
          <strong>Species:</strong> {character.species}
        </p>
        <p className={classes.detail}>
          <strong>Location:</strong> {character.location}
        </p>
      </div>
    </div>
  );
};
