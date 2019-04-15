import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import useGetter from '../../api/fetchItems';

import './Orders.scss';
import { CurrentUser } from '../../context/currentUser';
import { getOrders } from '../../api';

export default function Orders() {
  const { token, authenticated } = useContext(CurrentUser);
  const { items = [] } = useGetter(getOrders, {}, token);

  const orderList = items.map((order: any) => (
    // finna góða leið til þess að linka á pöntun
    <tr key={order.id}>
        <td>
          <Link to={`/orders/${order.id}`}>
            {`Pöntun #${order.id}`}
          </Link>
        </td>
        <td>{order.name}</td>
        <td>{order.address}</td>
        <td>{order.created}</td>
    </tr>
  ));


  return (
    <Fragment>
      <h1>Þínar pantanir</h1>
      <table>
        <thead>
          <tr>
            <th>Pöntun</th>
            <th>Nafn</th>
            <th>Heimilisfang</th>
            <th>Búin til</th>
          </tr>
        </thead>
        <tbody>
          { orderList }
        </tbody>
      </table>
    </Fragment>
  );
}
