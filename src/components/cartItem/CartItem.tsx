import React, { useState } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';

import './CartItem.scss';

export default function CartItem(props: any) {
  const { image, price, quantity: initalQuantity, title, id } = props;
  const { updateItem, deleteItem } = props;
  const [ quantity, setQuantity ] = useState(initalQuantity);

  const doUpdate = async () => {
    if (quantity > 0) {
      updateItem(id, quantity);
    } else {
      deleteItem(id);
    }
  }
  
  const doDelete = async () =>
    deleteItem(id);

  const total = price*quantity;
  return (
    <div className="cart__item">
      <div className="cart__item__info">
        <div className="cart__item__image" >
          <img src={ image }/>
        </div>
        <div className="cart__item__info__text">
          <h2>{ title }</h2>
          <p>{ `Verð: ${price} kr.-` }</p>
        </div>
      </div>
      <div className="cart__item__options">
        <div className="cart__item__options__quantity">
          <label className="cart__item__options__label">{'Fjöldi: '}</label>
          <Input value={ quantity } setValue={ setQuantity }/>
          <Button onClick={doUpdate} children="Uppfæra" small={true}/>
        </div>
        <strong>{ `Samtals: ${ total } kr.-` }</strong>
        <Button onClick={doDelete} children="Eyða línu" small={true}/>
      </div>
    </div>
  )
}