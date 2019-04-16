import React, { useState } from 'react';

import './Product.scss';
import AddToCart from '../cart/AddToCart';

export default function Product(props: any) {
  const { id, title, price, image, description, category_title: category, auth, add: state } = props;
  const { authenticated, token } = auth;
  const { add, setAdd } = state;
  return (
    <div className="product">
      <div className="product__col product__col__image">
        <img src={image}/>
      </div>
      <div className="product__col product__col__col">
        <h1 className="product__title">{title}</h1>
        <div className="product__details">
          <p>{`Flokkur: ${category}`}</p>
          <p>{`Verð: ${price} kr.-`}</p>
        </div>
        <p className="product__description">{description}</p>
        {
          authenticated ?
          <AddToCart  id={id} token={token} add={{add, setAdd}} />
          : null
        }
      </div>   
    </div>
  );
}

export {
  Product
}
