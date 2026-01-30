import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LocationCollectionVm } from './location-collection.vm';
import * as classes from './location-collection.styles';

interface Props {
  locationCollection: LocationCollectionVm;
  onPageChange: (page: number) => void;
}

export const LocationCollectionComponent: React.FC<Props> = ({
  locationCollection,
  onPageChange,
}) => {
  const { locations, info } = locationCollection;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Locations
      </Typography>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Total: {info.count} locations | Page {info.currentPage} of {info.pages}
      </Typography>

      <ul className={classes.list}>
        {locations.map((location) => (
          <li key={location.id}>
            <div className={classes.card}>
              <h3 className={classes.name}>{location.name}</h3>
              <p className={classes.detail}>
                <strong>Type:</strong> {location.type}
              </p>
              <p className={classes.detail}>
                <strong>Dimension:</strong> {location.dimension}
              </p>
              <p className={classes.detail}>
                <strong>Residents:</strong> {location.residentCount}
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
