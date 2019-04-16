import React from 'react';

import Categories from '../../components/categories/Categories';

import useGetter from '../../api/fetchItems';
import { getCategories } from '../../api/index';

export default function CategoryRoute() {
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
    getCategories, initialState, 12, 0
  );

  return (
    <div className="category">
      <h1>Skoðaðu vöruflokkana okkar</h1>
      <Categories items={items}/>
    </div>
  );
}
