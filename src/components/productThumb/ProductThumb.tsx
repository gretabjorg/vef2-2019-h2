import React from 'react';
import { Link } from 'react-router-dom';

import './ProductThumb.scss';

interface IProductThumProps {
  category_title: string;
  id: number;
  image?: string;
  price: number;
  title: string;
}

export default function Product(props: IProductThumProps) {
  const { title, category_title, price, image, id } = props;
  return (
    <Link 
    to={{
      pathname: `/product/${id}`
    }}
    className="thumbnail"
    >
    <div className="thumbnail__image">
      <img src={image} alt=""/>
    </div>
    <div className="thumbnail__bottom">
      <div className="thumbnail__texts">
        <h2 className="thumbnail__title">{title}</h2>
        <div className="thumbnail__category">{category_title}</div>
      </div>
      <div className="thumbnail__price">
        {`${price} kr.-`}
      </div>
    </div>
  </Link>
  );
}