import PropTypes from 'prop-types';
import {
  Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

function ProductCard({ photo, description, price }) {
  return (
    <Card variant="outlined" sx={{ width: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 240 }}
        image={photo?.includes('gif') ? 'https://dummyimage.com/360x180' : photo}
        title={description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          $
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Ir a web</Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  photo: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default ProductCard;
