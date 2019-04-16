import React, { Fragment, useState } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';
import { ValidationError } from '../../api/types';

import './OrderCart.scss';

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
    <div className={"order"}>
      <h1 className={"orderCart__h1"}>Senda inn pöntun</h1>
      <ul className={"orderCart__ul"}>{errorList}</ul>
      <div className={"orderCart__col"}>
        <label className={"orderCart__label"}>Nafn:</label>
        <Input value={name} setValue={setName}/>
      </div>
      <div className={"orderCart__col"}>
        <label className={"orderCart__label"}>Heimilisfang:</label>
        <Input value={address} setValue={setAddress}/>
      </div>
      <Button onClick={doOrder} children={'Senda pöntun'}/>
    </div>
  )
} 