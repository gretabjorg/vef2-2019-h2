import React, { useContext } from 'react';
import { Route } from 'react-router-dom';


import OrdersPage from '../../components/orders/Orders';
import Login from '../login/Login';

import { CurrentUser } from '../../context/currentUser';
import useGetter from '../../api/fetchItems';
import { getOrders } from '../../api';

export default function Orders() {
  const { authenticated, token } = useContext(CurrentUser);
  const { items = [] } = useGetter(getOrders, {}, token);

  if(!authenticated) {
    <Route component={Login}/>
  }

  return (
    <OrdersPage items={items} />
  );
}
