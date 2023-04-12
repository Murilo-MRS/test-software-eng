import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ButtonCustom({ children }) {
  return (
    <Button variant="contained">{children}</Button>
  );
}

ButtonCustom.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default ButtonCustom;
