import React, { useState, useEffect } from 'react';

import ProductThumb from '../productThumb/ProductThumb';

import './Products.scss';

import useItemGet from '../dataFetch/fetchItems'
import { getProducts } from '../../api/index';

export default function Products(props: any) {
  const {items: products} = useItemGet(getProducts, [props.limit]);
  
  const productList = 
    products.map((item: any) =>
      <ProductThumb {...item} key={item.id}/>
    );

  return (
    <div>
      <div>{ productList }</div>
    </div>
  );
}
