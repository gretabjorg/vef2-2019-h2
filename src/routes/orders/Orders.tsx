import React, { useContext } from 'react';
import useGetter from '../../api/fetchItems';

import OrdersPage from '../../components/orders/Orders';

import { CurrentUser } from '../../context/currentUser';
import { getOrders } from '../../api';

export default function Orders() {
  const { token } = useContext(CurrentUser);
  const { items = [] } = useGetter(getOrders, {}, token);

  return (
    <OrdersPage items={items} />
  );
}
