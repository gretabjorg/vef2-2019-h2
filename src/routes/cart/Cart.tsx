import React, { Fragment, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Cart.scss';
import useGetter from '../../api/fetchItems';
import { getCart } from '../../api/index';
import { CurrentUser } from '../../context/currentUser';
import CartList from '../../components/cartList/CartList';
import OrderCart from '../../components/orderCart/OrderCart';

import { updateCartLine, deleteCartLine, orderCart } from '../../api/index';
import { ValidationError, IProduct } from '../../api/types';

// TODO:
//  Finna leið til þess að rendera ekki fyrr en það er búið að tékka á körfu
//  Skoða hvort það sé betri leið til að redirecta
//  CSS
interface ICartPageProps {
  lines: IProduct[];
  updateItem: Function;
  deleteItem: Function;
  orderCart: Function;
  errors: ValidationError[];
  total: number;
}

function CartPage(props: ICartPageProps) {
  const { lines, updateItem, deleteItem, orderCart, errors, total } = props;
  
  return (
    <Fragment>
      {
        lines.length !== 0
          ? (
            <Fragment>
              <CartList updateItem={updateItem} deleteItem={deleteItem} cart={ lines } total={ total }/>
              <OrderCart orderCart={orderCart} errors={errors}/>
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