import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ValidationList from '../../components/validationList/ValidationList';

import './Login.scss';

export default function LoginForm(props: any) {
  const { validation = [], error = '', login, fetching = false } = props;
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const doLogin = () => {
    login(user, password);
  };
  
  return (
    <>
      <div className={"login__col"}>
        <h1>Innskráning</h1>
      </div>
      <ValidationList validation={validation} error={error} />
      <div className={"login__col"}>
        <label className={"login__label"}>Notandanafn:</label>
        <Input value={user} setValue={setUser}/>
      </div>
      <div className={"login__col"}>
        <label className={"login__label"}>Lykilorð:</label>
        <Input value={password} setValue={setPassword} type="password"/>
      </div>
      <div className={"login__col"}>
      </div>
      { fetching ? <p>Skrái inn</p> : null }
      <Button onClick={doLogin} children={'Skrá inn'}/>
      <div className={"login__col"}>
        <Link className={"login__link"} to="/register">Nýskráning</Link>
      </div>
    </>
  );
}