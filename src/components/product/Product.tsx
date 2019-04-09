import React from 'react';

import './Product.scss';
export default function Product(props: any) {
  const { title, price, image, description, category_title: category } = props;

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
      </div>   
    </div>
  );
}

export {
  Product
}