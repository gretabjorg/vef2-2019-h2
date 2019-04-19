import { Route } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Product as ProductComponent } from '../../components/product/Product';
import Products from '../../components/products/Products';
import useGetter from '../../api/fetchItems';
import { getProduct, getProducts } from '../../api/product';

import { CurrentUser } from '../../context/currentUser';

import './Product.scss';
import NotFound from '../system-pages/NotFound';

export default function Product(props: any) {
  const { authenticated, token } = useContext(CurrentUser);
  // scrollar efst ef að það er klikkað á link
  useEffect(() => {window.scrollTo(0, 0)});
  const { id } = props.match.params;
  const initialState = {
    category_id: 0,
    category_title: '',
    id: 0,
    image: '',
    price: 0,
    title: '',
    description: '',
  }

  const product = useGetter(getProduct, initialState, id);
  
  const {
    category_id: categoryId, category_title: categoryTitle
  } = product;
  
  const { items: category } = useGetter(getProducts, initialState, 6, 0, categoryId);
  const [ add, setAdd ] = useState(false);

  return (
    <>
      {product.id === undefined ?
        <Route component={NotFound}/>
        :
        <>
          <ProductComponent {...product} auth={{authenticated, token}} add={{add,setAdd}} />
          <h2 className={"productDetails"}>{`Meira úr ${categoryTitle}`}</h2>
          <Products items={category}/>
        </>
      }
    </>
  );
}
