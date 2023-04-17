import React from 'react';
import { Grid } from '@mui/material';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';

function Home() {
  return (
    <Grid container>
      <SearchBar />
      <ProductList />
    </Grid>
  );
}
export default Home;
