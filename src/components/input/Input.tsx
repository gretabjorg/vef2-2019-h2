import React from 'react';

import './Input.scss';

export default function Input(
  { value, setValue, pressedEnter = () => {}, type = 'text' }
  : { value: string | number, setValue: Function, pressedEnter?: Function, type?: string}
) {
  return (
    <input 
      className="input"
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => { if(e.key === 'Enter') pressedEnter }} 
      type={type}
      value={value}/>
  );
}