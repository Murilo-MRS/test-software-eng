import PropTypes from 'prop-types';
import {
  Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

function ProductCard({ title, thumbnail }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Ir a web</Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default ProductCard;
