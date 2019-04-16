import React from 'react';
import { Link } from 'react-router-dom';
import { ICartLine } from '../../api/types';

import './Orders.scss';

function makeRows({ lines }:{ lines: ICartLine[] }) {
  let index = 1;
  
  return (
    lines.map((item: ICartLine) => (
      <tr className="orders__row" key={index++}>
        <td className="orders__th">{item.title}</td>
        <td>{`${item.price} kr.-`}</td>
        <td>{item.quantity}</td>
        <td>{item.total}</td>
      </tr>
    )) 
  )
}

function OrderInfo(
  { id, name, address, created }
  : { id: number, name: string, address: string, created: Date }
) {
  return (
    <div className="order_info">
    <h1 className="order_info__h1">{`Pöntun #${id}`}</h1>
    <div className="order_info__info">
      <div className="order_info__row">
        <p className="order_info__col order_info__label">Nafn</p>
        <p className="order_info__col">{ name }</p>
      </div>
      <div className="order_info__row">
        <p className="order_info__col order_info__label">Heimilisfang</p>
        <p className="order_info__col">{ address }</p>
      </div>
      <div className="order_info__row">
        <p className="order_info__col order_info__label">Búin til</p>
        <p className="order_info__col">{ created }</p>
      </div>
    </div>
  </div>
  )
}

export default function OrderPage({ items }:{items: any}) {
  const { total } = items;
  const itemTableRows = makeRows({lines: items.lines});
  
  return (
    <>
      <div className="order_container">
      <OrderInfo 
        id={ items.id }
        name={ items.name }
        address={ items.address }
        created={ items.created }
      />
      
        <table className="orders">
          <thead className="orders__head">
            <tr>
              <th className="orders__th">Vara</th>
            <th>Verð</th>
            <th>Fjöldi</th>
            <th>Samtals</th>
          </tr>
        </thead>
          <tbody>
          { itemTableRows }
            <tr>
              <td colSpan={3}/>
              <td className="orders__strong"><strong>{ `${ total } kr.-` }</strong></td>
            </tr>
        </tbody>
      </table>
        <div className="order_info">
          <Link className="orders__link" to="/orders">Aftur í pantanir</Link>
        </div>
      </div>
    </>
  );
}
