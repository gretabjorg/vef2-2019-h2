import React from 'react';

import ProductThumb from '../productThumb/ProductThumb';

import './Products.scss';

import listWrap from '../listWrapper/ListWrapper';
import { IProduct } from '../../api/types';

export default function Products(
  { items } : { items: IProduct[] }
) {
  const List = listWrap(ProductThumb, items);

  return (
    <React.Fragment>
      <List/>
    </React.Fragment>
  );
}
