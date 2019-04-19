import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';

import useGetter from '../../api/fetchItems';
import { getCart } from '../../api/orders';
import { CurrentUser } from '../../context/currentUser';
import CartPage from '../../components/cart/CartPage';

import { updateCartLine, deleteCartLine, orderCart } from '../../api/orders';
import Login from '../login/Login';

export default function Cart() {
  const { token, authenticated } = useContext(CurrentUser);
  const [ errors, setErrors ] = useState([]);
  const [ updating, toggleUpdate ] = useState(false); // breyta til þess að triggera rerender á listanum
  const { lines = [], total = 0} = useGetter(getCart, {}, token, updating);

  const updateItem = async (id: number, quantity: number) => {
    await updateCartLine(token, id, quantity); 
    toggleUpdate(!updating);
  }
  
  const deleteItem = async (id: number) => {
    await deleteCartLine(token, id);
    toggleUpdate(!updating);
  }

  const makeOrder = async (name: string, address: string) => {
    const result = await orderCart(token, name, address);
    if (result.errors) {
      setErrors(result.errors);
    }
    toggleUpdate(!updating);
  }

  if (!authenticated) {
    return <Route component={Login} />
  }

  return (
    <CartPage
      lines={lines}
      updateItem={updateItem}
      deleteItem={deleteItem}
      orderCart={makeOrder}
      errors={errors}
      total={total} />
  );
}