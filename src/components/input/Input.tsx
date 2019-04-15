import React from 'react';

import './Input.scss';

export default function Input(props: any) {
  const { value, setValue, pressedEnter={} } = props;
  return (
    <input 
      className={"input"}
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => { if(e.key === 'Enter') pressedEnter }} 
      type="text" 
      value={value}/>
  );
}