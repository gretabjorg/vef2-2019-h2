import React from 'react';

import './Input.scss';

export default function Input(
  {value, setValue, pressedEnter=() => {}}
  : { value: string | number, setValue: Function, pressedEnter?: Function}
) {
  return (
    <input 
      className={"input"}
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => { if(e.key === 'Enter') pressedEnter }} 
      type="text" 
      value={value}/>
  );
}