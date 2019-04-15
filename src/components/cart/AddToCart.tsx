import React, { useContext, useState, Fragment } from 'react';

import { CurrentUser } from '../../context/currentUser';
import Input from '../input/Input';
import Button from '../button/Button';
import { postToCart, getCart } from '../../api';
import { async } from 'q';

import './Cart.scss';

export default function AddToCart(props: any) {
  const { authenticated, token } = useContext(CurrentUser);
  const { id } = props;
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState('');

  const addToCart = async () => {
    const result = await postToCart(token, id, quantity);
    setResult(result);
  }

  return(
    <div className="cart__item__options__quantity">
      <label>Fjöldi</label>
      <Input value={quantity} setValue={setQuantity}></Input>
      <Button onClick={addToCart} small={true}>Bæta við körfu</Button>
      {result ? <p className={"cart__item__p"}>Bætt við körfu!</p> : null}
    </div>
  );
}
