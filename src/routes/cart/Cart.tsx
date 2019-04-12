import React, { Fragment, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Cart.scss';
import useGetter from '../../api/fetchItems';
import { getCart } from '../../api/index';
import { CurrentUser } from '../../context/currentUser';
import CartList from '../../components/cartList/CartList';
import OrderCart from '../../components/orderCart/OrderCart';

import { updateCartLine, deleteCartLine } from '../../api/index';

// TODO:
//  Finna leið til þess að rendera ekki fyrr en það er búið að tékka á körfu
//  Skoða hvort það sé betri leið til að redirecta

function CartPage(props: any) {
  const { lines, updateItem, deleteItem, total } = props;
  return (
    <Fragment>
      {
        lines.length !== 0
          ? (
            <Fragment>
              <CartList updateItem={updateItem} deleteItem={deleteItem} cart={ lines } total={ total }/>
              <OrderCart />
            </Fragment>
          )
          : (
            <Fragment>
              <h1>Karfan er tóm</h1>
              <Link to="/products">Má bjóða þér að versla?</Link>
            </Fragment>
          )
      }
    </Fragment>
  );
} 

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
    <CartPage lines={lines} updateItem={updateItem} deleteItem={deleteItem} total={total} />
  );
}