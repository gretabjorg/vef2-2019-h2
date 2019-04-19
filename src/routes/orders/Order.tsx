import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import OrderPage from '../../components/orders/Order';
import NotFound from '../system-pages/NotFound';
import Login from '../login/Login';

import { CurrentUser } from '../../context/currentUser';
import useGetter from '../../api/fetchItems';
import { getOrder } from '../../api/orders';

function orderItems(props: any) {
  const { lines = [] } = props;
  
  let index = 1;
  return (
    lines.map((item: any) => (//ICartLine
      <tr key={index++}>
        <td>{item.title}</td>
        <td>{`${item.price} kr.-`}</td>
        <td>{item.quantity}</td>
        <td>{item.total}</td>
      </tr>
    )) 
  )
}

export default function OrderRoute(props: any) {
  const { authenticated, token } = useContext(CurrentUser);
  const { id } = props.match.params;
  
  if(!authenticated) {
    <Route component={Login}/>
  }

  const initialState = {
    address: '',
    created: '',
    id: 0,
    lines: [],
    name: '',
    total: 0,
    updated: '',
    user_id: 0,
  }
  const order = useGetter(getOrder, initialState, token, id);

  if(order.id === undefined) {
    <Route component={NotFound}/>
  }

  return (
    <OrderPage items={ order }/>
  );
}
