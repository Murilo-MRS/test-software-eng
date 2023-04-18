import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import Context from '../Context';
import getRequest from '../../../utils/axios';

function Provider({ children }) {
  const [site, setSite] = useState('');
  const [category, setCategory] = useState('');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState({ category: '', webssite: '', searchTerm: '' });

  const fetchProducts = async (categoryFilter, siteFilter, searchFilter) => {
    const response = await getRequest(`/products/database?website=${siteFilter}`);
    const filterResponse = response
      ?.filter((product) => product?.description
        .toLowerCase().includes(searchFilter?.toLowerCase()))
      .filter((product) => product?.category === categoryFilter);
    return setData(filterResponse);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const responseMobile = await getRequest('/products?q=celular');
      const responseTv = await getRequest('/products?q=tv');
      const responseRefrigerator = await getRequest('/products?q=geladeira');
      setData([...responseMobile, ...responseTv, ...responseRefrigerator]);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (search) {
      fetchProducts(filter?.category, filter?.webssite, filter?.searchTerm);

      setSearch(false);
    }
  }, [search]);

  const contextValue = useMemo(
    () => (
      {
        site,
        setSite,
        category,
        setCategory,
        search,
        setSearch,
        data,
        setData,
        productList,
        setProductList,
        filter,
        setFilter,
      }
    ),
    [data, search],
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
