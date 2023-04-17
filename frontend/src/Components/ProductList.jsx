import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import Context from '../context/Context';

function ProductList() {
  const { data } = useContext(Context);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ m: 2 }}
    >
      {
        data.map((product) => (
          <Grid
            item
            xs={3}
            key={product.id}
          >
            <ProductCard
              photo={product.photo}
              description={product.description}
              price={product.price}
            />
          </Grid>

        ))
      }
    </Grid>
  );
}
export default ProductList;
