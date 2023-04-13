import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import Context from '../Context';
// import getRequest from '../../../utils/axios';

function Provider({ children }) {
  // const [data, setData] = useState([]);
  // const [productList, setProductList] = useState([]);
  // const fetchProducts = async () => {
  //   const response = await getRequest('https://api.mercadolibre.com/sites/MLB/search?category=MLB5726&q=');
  //   setData(response);
  // };
  useEffect(() => {
    // setData();
    // setData([...getRequest('https://api.mercadolibre.com/sites/MLB/search?category=MLB5726&q=')]);
  }, []);

  const contextValue = useMemo(
    () => (
      {

      }
    ),
    [],
  );

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

// https://api.mercadolibre.com/sites/MLB/search?q=Motorola%20G6
// https://api.mercadolibre.com/sites/MLB/categories
// https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}
// https://api.mercadolibre.com/items/${PRODUCT_ID}

// MLB5726
// MLB1051
// MLB1000

// MLA5726
// MLA1051
// MLA1000
