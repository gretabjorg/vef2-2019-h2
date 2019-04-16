import React, { useContext } from 'react';

import OrderPage from '../../components/orders/Order';

import { CurrentUser } from '../../context/currentUser';
import useGetter from '../../api/fetchItems';
import { getOrder } from '../../api';

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
  const { token } = useContext(CurrentUser);
  const { id } = props.match.params;

  const order = useGetter(getOrder, {}, token, id);
  
  return (
    <>
    { order.id
      ? <OrderPage items={ order }/>
      : null
    }
    </>
  );
}
