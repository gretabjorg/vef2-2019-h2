import React, { Fragment, useState } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';
import { ValidationError } from '../../api/types';

export default function(
  { orderCart, errors }
  : { orderCart: Function, errors: ValidationError[]}
) {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');

  const doOrder = async () =>
    orderCart(name, address);
  
  const errorList = errors.map((error: any )=> (
    <Fragment>
      <li>{`${error.field}, ${error.error}`}</li>
    </Fragment>
  ));

  return (
    <Fragment>
      <h1>Senda inn pöntun</h1>
      <ul>{errorList}</ul>
      <label>Nafn:</label>
      <Input value={name} setValue={setName}/>
      <label>Heimilisfang:</label>
      <Input value={address} setValue={setAddress}/>
      <Button onClick={doOrder} children={'Senda pöntun'}/>
    </Fragment>
  )
} 