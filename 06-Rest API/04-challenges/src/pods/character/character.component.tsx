import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterDetail } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: CharacterDetail;
  onBack: () => void;
  onSave?: (character: CharacterDetail) => void;
  canEdit: boolean;
}

export const CharacterComponent: React.FC<Props> = ({ 
  character, 
  onBack, 
  onSave,
  canEdit 
}) => {
  const statusClass = character.status.toLowerCase();
  const [editedCharacter, setEditedCharacter] = React.useState(character);
  const [newSentence, setNewSentence] = React.useState('');

  React.useEffect(() => {
    setEditedCharacter(character);
  }, [character]);

  const handleAddSentence = () => {
    if (newSentence.trim()) {
      setEditedCharacter({
        ...editedCharacter,
        bestSentences: [...editedCharacter.bestSentences, newSentence.trim()],
      });
      setNewSentence('');
    }
  };

  const handleRemoveSentence = (index: number) => {
    setEditedCharacter({
      ...editedCharacter,
      bestSentences: editedCharacter.bestSentences.filter((_, i) => i !== index),
    });
  };

  const handleSave = () => {
    if (onSave) {
      onSave(editedCharacter);
    }
  };

  const hasChanges = JSON.stringify(character.bestSentences) !== JSON.stringify(editedCharacter.bestSentences);

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        className={classes.backButton}
      >
        Back to Characters
      </Button>

      <div className={classes.header}>
        <div className={classes.imageContainer}>
          <img src={character.image} alt={character.name} />
        </div>

        <div className={classes.info}>
          <h1 className={classes.name}>{character.name}</h1>

          <div className={classes.detailRow}>
            <strong>Status:</strong>
            <span className={`${classes.status} ${statusClass}`}>
              {character.status}
            </span>
          </div>

          <div className={classes.detailRow}>
            <strong>Species:</strong>
            <span>{character.species}</span>
          </div>

          {character.type !== 'N/A' && (
            <div className={classes.detailRow}>
              <strong>Type:</strong>
              <span>{character.type}</span>
            </div>
          )}

          <div className={classes.detailRow}>
            <strong>Gender:</strong>
            <span>{character.gender}</span>
          </div>

          <div className={classes.detailRow}>
            <strong>Origin:</strong>
            <span>{character.origin}</span>
          </div>

          <div className={classes.detailRow}>
            <strong>Location:</strong>
            <span>{character.location}</span>
          </div>

          <div className={classes.detailRow}>
            <strong>Episodes:</strong>
            <span>{character.episodeCount}</span>
          </div>

          <div className={classes.detailRow}>
            <strong>Created:</strong>
            <span>{character.created}</span>
          </div>
        </div>
      </div>

      <div className={classes.sentencesSection}>
        <Typography variant="h5" gutterBottom>
          Best Sentences
        </Typography>

        {canEdit && (
          <div className={classes.addSentenceContainer}>
            <TextField
              fullWidth
              label="Add a new sentence"
              value={newSentence}
              onChange={(e) => setNewSentence(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddSentence();
                }
              }}
              placeholder="Enter a memorable quote..."
            />
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddSentence}
              disabled={!newSentence.trim()}
            >
              Add
            </Button>
          </div>
        )}

        {editedCharacter.bestSentences.length > 0 ? (
          <ul className={classes.sentencesList}>
            {editedCharacter.bestSentences.map((sentence, index) => (
              <li key={index}>
                {sentence}
                {canEdit && (
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveSentence(index)}
                    className={classes.deleteButton}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <Typography color="textSecondary" style={{ marginTop: '1rem' }}>
            No sentences added yet. {canEdit && 'Add some memorable quotes!'}
          </Typography>
        )}

        {canEdit && hasChanges && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            size="large"
            style={{ marginTop: '1rem' }}
          >
            Save Changes
          </Button>
        )}
      </div>
    </div>
  );
};
