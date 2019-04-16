import React, { useState, useEffect } from 'react';

import Products from '../../components/products/Products';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';


import useGetter from '../../api/fetchItems';
import { getProducts, getCategories } from '../../api/index';

import './Category.scss';

export default function CategoryRoute(props: any) {
  const [ page, setPage ] = useState(0);
  const [ search, setSearch ] = useState('');
  const [ query, submitSearch ] = useState(search);
  const limit = 12;
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
  const { items } = useGetter(
    getProducts, initialState, limit+1, page, id, query
  );
  
  const { title } = useGetter(
    getCategories, {}, null, null, id
  );
  
  // Ný síða ef það eru fleiri vörur er passa
  const hasNextPage = items.length > limit ? true : false;
  if (items.length > limit) {
    items.pop();
  }

  function handleSearch() {
    submitSearch(search);
  }
  
  return (
    <div className="category">
    <h1>{ title }</h1>
      <Search searchString={search} setSearch={setSearch} submitSearch={handleSearch} />
      <Products items={items}/>
      <div className="category__page">
        { page ? <Button onClick={() => setPage(page - 12) } children={ "Fyrri síða" } small={true} /> : null }
        <p className="category__page__number">{`Síða ${page / 12 + 1}`}</p>
        { hasNextPage ? <Button onClick={() => setPage(page + 12) } children={ "Næsta síða" } /> : null }
      </div>
    </div>
  );
}
