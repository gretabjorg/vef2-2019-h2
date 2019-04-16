import React from 'react';
import { ICartLine } from '../../api/types';

function makeRows({ lines }:{ lines: ICartLine[] }) {
  let index = 1;
  
  return (
    lines.map((item: ICartLine) => (
      <tr className="order_table__row" key={index++}>
        <td>{item.title}</td>
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
  <>
    <h1>{`Pöntun #${id}`}</h1>
    <div className="order_info">
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
  </>
  )
}

export default function OrderPage({ items }:{items: any}) {
  const itemTableRows = makeRows({lines: items.lines});
  return (
    <>
      <OrderInfo 
        id={ items.id }
        name={ items.name }
        address={ items.address }
        created={ items.created }
      />
      <table className="order_table">
        <thead className="order_table__header">
          <tr className="order_table__row">
            <th>Vara</th>
            <th>Verð</th>
            <th>Fjöldi</th>
            <th>Samtals</th>
          </tr>
        </thead>
        <tbody className="order_table__body">
          { itemTableRows }
        </tbody>
      </table>
    </>
  );
}
