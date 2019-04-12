import React, { Fragment } from 'react';

import CartItem from '../cartItem/CartItem';

import './CartList.scss';
export default function CartList(props: any) {
  const { cart = [], total } = props;
  const { updateItem, deleteItem } = props;
  const list = cart.map((line: any) => 
    <Fragment>
      <CartItem
        key={ line.id }
        updateItem={ updateItem }
        deleteItem={ deleteItem }
        { ...line }/>
    </Fragment>
  );

  return (
    <div className="cart">
      { list }
      <p>{ `Karfa samtals: ${total} kr.-` }</p>
    </div>
  );
} 