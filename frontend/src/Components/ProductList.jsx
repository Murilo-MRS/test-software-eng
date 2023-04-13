import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
// import Context from '../context/Context';

function ProductList() {
  // const { data } = useContext(Context);
  const data = [
    { title: 'Televisão' },
    { title: 'Celular' },
    { title: 'Geladeira' },
    { title: 'Fogão' },
    { title: 'Microondas' },
    { title: 'Notebook' },
    { title: 'HD externo' },
    { title: 'Placa de vídeo' },
    { title: 'Ar Condicionado' },
    { title: 'Freezer' },
    { title: 'Cook Top' },
    { title: 'Roupas' },
  ];
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
          >
            <ProductCard key={product.title} props={product} />
          </Grid>

        ))
      }
    </Grid>
  );
}
export default ProductList;
