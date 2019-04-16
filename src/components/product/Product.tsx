import React, { useContext, useState } from 'react';

import './Product.scss';
import AddToCart from '../cart/AddToCart';
import { postToCart, getCart } from '../../api';
import { CurrentUser } from '../../context/currentUser';
import useGetter from '../../api/fetchItems';

export default function Product(props: any) {
  const { id, title, price, image, description, category_title: category } = props;
  const { authenticated, token } = useContext(CurrentUser);
  
  return (
    <div className="product">
      <div className="product__col">
        <img src={image}/>
      </div>
      <div className="product__col">
        <h1 className="product__title">{title}</h1>
        <div className="product__details">
          <p>{`Flokkur: ${category}`}</p>
          <p>{`Verð: ${price} kr.-`}</p>
        </div>
        <p className="product__description">{description}</p>
        {
          authenticated ?
          <AddToCart  id={id} />
          : ''
        }
      </div>   
    </div>
  );
}

export {
  Product
}
