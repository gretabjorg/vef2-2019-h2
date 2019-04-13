import React, { Fragment, useContext } from 'react';

import Input from '../input/Input';

export default function(props: any) {

  return (
    <Fragment>
      <h1>Senda inn pöntun</h1>
      <label>Nafn:</label>
      <Input />
      <label>Heimilisfang:</label>
      <Input />
    </Fragment>
  )
} 