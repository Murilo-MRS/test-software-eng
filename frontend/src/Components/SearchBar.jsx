import {
  Button,
  FormControl,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { setFilter, setSearch } = useContext(Context);

  const [site, setSite] = useState('');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setFilter({ category, webssite: site, searchTerm });
    setSearch(true);
  };

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
            <MenuItem value="mercadolivre">Mercado Livre Brasil</MenuItem>
            <MenuItem value="buscape">Buscape</MenuItem>
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
            <MenuItem value="geladeira">Geladeira</MenuItem>
            <MenuItem value="tv">TV</MenuItem>
            <MenuItem value="celular">Celular</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth size="large">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
export default SearchBar;
