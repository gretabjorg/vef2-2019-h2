import React, { useState } from 'react';

import Products from '../../components/products/Products';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';


import useGetter from '../../api/fetchItems';
import { getProducts } from '../../api/index';

import './Category.scss';

export default function CategoryRoute(props: any) {
  const [ page, setPage ] = useState(0);
  const [ search, setSearch ] = useState('');

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

  const { items } = useGetter(
    getProducts, initialState, 12, page
  );

  return (
    <div className="category">
      <Search />
      <Products items={items}/>
      <div className="category__page">
        { page ? <Button onClick={() => setPage(page - 12) } children={ "Fyrri síða" } /> : null }
        <p className="category__page__number">{`Síða ${page / 12 + 1}`}</p>
        <Button onClick={() => setPage(page + 12) } children={ "Næsta síða" } />
      </div>
    </div>
  );
}
