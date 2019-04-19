import React, { useEffect, useState } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';
import { postToCart } from '../../api/orders';

import './Cart.scss';

export default function AddToCart(props: any) {
  const { id, token, add: state } = props;
  const { add, setAdd } = state;
  const [reset, setReset] = useState(false)
  const [quantity, setQuantity] = useState(1);
  const addToCart = async () => {
    const result = await postToCart(token, id, quantity);
    !result.errors ? setAdd(true) : () => {};
    (quantity != 1) ? setReset(true) : null;
  }

  useEffect(() => {
    setAdd(false);
    setReset(false);
    setQuantity(1);
  }, [id]);

  return(
    <div className="cart__item__options__quantity">
      <label className="cart__item__options__label">Fjöldi</label>
      <Input value={quantity} setValue={setQuantity}></Input>
      <Button onClick={addToCart} small={true}>Bæta við körfu</Button>
      {add ? <p className={"cart__item__p"}>Bætt við körfu!</p> : null}
    </div>
  );
}
