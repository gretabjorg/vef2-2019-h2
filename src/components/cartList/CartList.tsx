import React, { Fragment } from 'react';

import CartItem from '../cartItem/CartItem';

import './CartList.scss';
export default function CartList(props: any) {
  const { cart = [], total } = props;
  const list = cart.map((line: any) => 
    <Fragment>
      <CartItem key={ line.id } { ...line }/>
    </Fragment>
  );

  return (
    <div className="cart">
      { list }
      <p>{ `Karfa samtals: ${total} kr.-` }</p>
    </div>
  );
} 