import PropTypes from 'prop-types';
import {
  Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

function ProductCard({ title }) {
  return (
    <Card variant="outlined" sx={{ width: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 120 }}
        image="https://dummyimage.com/360x180"
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
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
