import React, { Fragment, useState, useContext } from 'react';

import './Cart.scss';
import useGetter from '../../api/fetchItems';
import { getCart } from '../../api/index';
import { CurrentUser } from '../../context/currentUser';
import CartList from '../../components/cartList/CartList';
import OrderCart from '../../components/orderCart/OrderCart';

import { updateCartLine, deleteCartLine } from '../../api/index';


export default function Cart() {
  const { token, authenticated } = useContext(CurrentUser);
  const [ deleting, setDelete ] = useState(false); // breyta til þess að triggera rerender á listanum
  const { lines = [], total = 0} = useGetter(getCart, {}, token, deleting);

  const updateItem = async (id: Number, quantity: Number) =>
    updateCartLine(token, id, quantity); 
  
  const deleteItem = async (id: Number) => {
    await deleteCartLine(token, id);
    setDelete(!deleting);
  }
  

  return (
    <Fragment>
      <CartList updateItem={updateItem} deleteItem={deleteItem} cart={ lines } total={ total }/>
      <OrderCart />
    </Fragment>
  );
}