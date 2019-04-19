import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Products from '../../components/products/Products';
import Search from '../../components/search/Search';
import Paging from '../../components/paging/Paging';
import NotFound from '../system-pages/NotFound';


import useGetter from '../../api/fetchItems';
import { getProducts, getCategories } from '../../api/index';

import './Category.scss';

export default function CategoryRoute(props: any) {
  const [ page, setPage ] = useState(0);
  const [ search, setSearch ] = useState('');
  const [ query, submitSearch ] = useState(search);
  const { id } = props.match.params;
  const initialState = {
    limit: 0,
    offset: 0,
    items: [],
    _links: {
      self: {
        href: {}
      },
      prev: {
        href: {}
      },
      next: {
        href: {}
      }
    }
  };
  
  // Sækjum 13 vörur til þess að athuga hvort það sé ný síða
  const limit = 12;
  const { items } = useGetter(
    getProducts, initialState, limit+1, page, id, query
  );
  
  const initialCat = {
    id: 0,
    title: '',
  }

  const { id: categoryId, title } = useGetter(
    getCategories, initialCat, null, null, id
  );

  // Ný síða ef það eru fleiri vörur er passa
  const hasNextPage = items.length > limit || items.length === undefined ? true : false;
  if (items.length > limit) {
    items.pop();
  }

  function handleSearch() {
    submitSearch(search);
  }
  
  if (categoryId === undefined) {
    return (
      <Route component={NotFound}/>
    )
  }

  return (
    <div className="category">
    <h1>{ title }</h1>
      <Search searchString={search} setSearch={setSearch} submitSearch={handleSearch} />
      <Products items={items}/>
      <Paging hasNextPage={hasNextPage} page={{page, setPage, limit}} />
    </div>
  );
}
