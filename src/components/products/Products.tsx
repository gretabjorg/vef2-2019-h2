import React from 'react';

import ProductThumb from '../productThumb/ProductThumb';

import './Products.scss';

import { getProducts } from '../../api/index';
import listWrap from '../listWrapper/ListWrapper';

export default function Products(props: any) {
  const { items } = props;
  const List = listWrap(ProductThumb, items);
  return (
    <React.Fragment>
      <List/>
    </React.Fragment>
  );
}
