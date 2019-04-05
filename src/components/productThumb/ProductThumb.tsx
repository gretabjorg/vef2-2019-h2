import React from 'react';

export default function Product(props: any) {
  return (
    <div>
      <img src={ props.image } />
      <p>{ props.title }</p>
      <p>{ props.price }</p>
    </div>
  );
}