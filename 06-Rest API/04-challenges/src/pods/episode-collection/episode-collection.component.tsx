import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { EpisodeCollectionVm } from './episode-collection.vm';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeCollectionVm;
  onPageChange: (page: number) => void;
}

export const EpisodeCollectionComponent: React.FC<Props> = ({
  episodeCollection,
  onPageChange,
}) => {
  const { episodes, info } = episodeCollection;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Episodes
      </Typography>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Total: {info.count} episodes | Page {info.currentPage} of {info.pages}
      </Typography>

      <ul className={classes.list}>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <div className={classes.card}>
              <h3 className={classes.name}>{episode.name}</h3>
              <span className={classes.episode}>{episode.episode}</span>
              <p className={classes.detail}>
                <strong>Air Date:</strong> {episode.airDate}
              </p>
              <p className={classes.detail}>
                <strong>Characters:</strong> {episode.characterCount}
              </p>
            </div>
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
