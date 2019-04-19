import React, { useState } from 'react';

import Categories from '../../components/categories/Categories';
import Paging from '../../components/paging/Paging';

import useGetter from '../../api/fetchItems';
import { getCategories } from '../../api/product';

import './Categories.scss';

export default function CategoryRoute() {
  const [ page, setPage ] = useState(0);
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
    getCategories, initialState, limit+1, page
  );
  
  // Ný síða ef það eru fleiri vörur er passa
  const hasNextPage = items.length > limit ? true : false;
  if (items.length > limit) {
    items.pop();
  }
  

  return (
    <div className="category">
      <h1 className="categories__h1" >Skoðaðu vöruflokkana okkar</h1>
      <Categories items={items}/>
      <Paging hasNextPage={hasNextPage} page={{page, setPage, limit}} />
    </div>
  );
}
