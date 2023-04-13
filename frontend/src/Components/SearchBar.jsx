import {
  Button,
  FormControl,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useState } from 'react';

function SearchBar() {
  const [site, setSite] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ m: 1 }}
    >
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="site-simple-select-label">Web</InputLabel>
          <Select
            labelId="site-simple-select-label"
            id="site-simple-select"
            value={site}
            label="Web"
            onChange={({ target }) => setSite(target.value)}
            defaultValue="TODAS"
            autoWidth
          >
            <MenuItem value="TODAS">Todas</MenuItem>
            <MenuItem value="MLB">Mercado Livre Brasil</MenuItem>
            <MenuItem value="MLA">Mercado Livre Argentina</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="category-simple-select-label">Category</InputLabel>
          <Select
            labelId="category-simple-select-label"
            id="category-simple-select"
            value={category}
            label="Category"
            onChange={({ target }) => setCategory(target.value)}
            defaultValue=""
            autoWidth
          >
            <MenuItem value={10}>Geladeira</MenuItem>
            <MenuItem value={20}>TV</MenuItem>
            <MenuItem value={30}>Celular</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth size="large">
          <Button variant="contained" color="primary">Search</Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
export default SearchBar;
