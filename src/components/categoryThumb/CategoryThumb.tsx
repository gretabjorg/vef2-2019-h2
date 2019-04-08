import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryThumb.scss';

export default function Product(props: any) {
  const { title, id } = props;
  return (
    <Link 
    to={{
      pathname: `/categories/${id}`
    }}
    className="category_thumb"
    >
      <h1 className="category_thumb__title">{title}</h1>
  </Link>
  );
}