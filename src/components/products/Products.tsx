import React from 'react';

import ProductThumb from '../productThumb/ProductThumb';

import './Products.scss';

import useItemGet from '../dataFetch/fetchItems'
import { getProducts } from '../../api/index';

export default function Products(props: any) {
  const {items: products} = useItemGet(
    getProducts, props.limit, props.offset, props.category, props.search
  );
  
  const productList = 
    products.map((item: any) =>
      <div className="products__col">
        <ProductThumb {...item} key={item.id}/>
      </div>
    );
  
  return (
    <React.Fragment>
      <div className="products">
        <div className="products__row">
          { productList }
        </div>
      </div>
    </React.Fragment>
  );
}
