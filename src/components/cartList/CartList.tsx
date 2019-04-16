import React, { Fragment } from 'react';

import CartItem from '../cartItem/CartItem';

import { IProduct } from '../../api/types';

interface ICartListProps {
  cart: IProduct[];
  total: number;
  updateItem: Function;
  deleteItem: Function;
}

import './CartList.scss';

export default function CartList(props: ICartListProps) {
  const { cart = [], total } = props;
  const { updateItem, deleteItem } = props;
  const list = cart.map((line: IProduct) => 
    <Fragment key={ line.id }>
      <CartItem
        updateItem={ updateItem }
        deleteItem={ deleteItem }
        { ...line }/>
    </Fragment>
  );

  return (
    <div className="cart">
      { list }
      <div className={"cart__strong"}>
        <strong>{ `Karfa samtals: ${ total } kr.-` }</strong>
      </div>
    </div>
  );
} 