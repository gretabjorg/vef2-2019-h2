import React from 'react';
import { Link } from 'react-router-dom';

import CartList from '../../components/cartList/CartList';
import OrderCart from '../../components/orderCart/OrderCart';
import Button from '../../components/button/Button';

import { ValidationError, IProduct } from '../../api/types';

import './Cart.scss';

interface ICartPageProps {
  lines: IProduct[];
  updateItem: Function;
  deleteItem: Function;
  orderCart: Function;
  errors: ValidationError[];
  total: number;
}

export default function CartPage(props: ICartPageProps) {
  const { lines, updateItem, deleteItem, orderCart, errors, total } = props;
  
  return (
    <>
      {
        lines.length !== 0
          ? (
            <>
              <CartList updateItem={updateItem} deleteItem={deleteItem} cart={ lines } total={ total }/>
              <OrderCart orderCart={orderCart} errors={errors}/>
            </>
          )
          : (
            <>
              <h1 className={"cart__h1"}>Karfan er tóm</h1>
              <Link to='/'><Button children={'Má bjóða þér að versla?'}/></Link>
            </>
          )
      }
    </>
  );
} 
