import React from 'react';
import { Link } from 'react-router-dom';

import './ProductThumb.scss';

export default function Product(props: any) {
  const { title, category_title, price, image } = props;
  return (
    <Link 
    to={{
      pathname: "/"
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

    // <div className="thumbnail">
    
    //   <img className="thumbnail__image" src={ props.image } />
    //   <p>{ props.title }</p>
    //   <p>{ props.price }</p>
    // </div>
  );
}