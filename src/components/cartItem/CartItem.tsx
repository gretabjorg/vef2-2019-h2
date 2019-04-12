import React, { Fragment, useState } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';

import './CartItem.scss';

export default function CartItem(props: any) {
  const { image, price, quantity: initalQuantity, title } = props;
  const [ quantity, setQuantity ] = useState(initalQuantity);

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
          <label>{'Fjöldi: '}</label>
          <Input value={ quantity } setValue={ setQuantity }/>
          <Button children="Uppfæra" small={true}/>
        </div>
        <strong>{ `Samtals: ${ total } kr.-` }</strong>
        <Button children="Eyða" small={true}/>
      </div>
    </div>
  )
}