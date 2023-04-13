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
