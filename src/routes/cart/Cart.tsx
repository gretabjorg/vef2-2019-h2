import React, { Fragment, useContext } from 'react';

import './Cart.scss';
import useGetter from '../../api/fetchItems';
import { getCart } from '../../api/index';
import { CurrentUser } from '../../context/currentUser';
import CartList from '../../components/cartList/CartList';

export default function Cart() {
  const { token, authenticated } = useContext(CurrentUser);
  const temptoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTU1MDcyNjc3LCJleHAiOjE1NTU2Nzc0Nzd9.2ua8d1HyWhek3kIY1V5A9WKcWQ7sOgp1vZlxTR3axKw';
  const initialState = {

  }
  const { lines = [], total = 0 } = useGetter(getCart, {}, temptoken);// token);

  return (
    <Fragment>
      <CartList cart={ lines } total={ total }/>
    </Fragment>
  );
}