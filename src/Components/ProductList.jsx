import React, { useContext } from 'react';
import { Container } from '@mui/material';
import ProductCard from './ProductCard';
import Context from '../context/Context';

function ProductList() {
  const { data } = useContext(Context);
  return (
    <Container maxWidth="sm">
      {
        data.map((product) => (
          <ProductCard props={product} />
        ))
      }
    </Container>
  );
}
export default ProductList;
