import React from 'react';

import ProductThumb from '../productThumb/ProductThumb';

import './Products.scss';

import { getProducts } from '../../api/index';
import listWrap from '../listWrapper/ListWrapper';

export default function Products(props: any) {
  const { limit, offset } = props;
  const List = listWrap(ProductThumb, getProducts);
  return (
    <React.Fragment>
      <List values={[limit, offset]}/>
    </React.Fragment>
  );
}
