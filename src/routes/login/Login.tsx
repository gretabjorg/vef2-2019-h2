import React, { Fragment, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import { CurrentUser } from '../../context/currentUser';

import './Login.scss';
import ValidationList from '../../components/validationList/ValidationList';

function Loading(props: any) {
  const { message } = props;
  return (
    <p>{
      `${message}`
    }</p>
  )
}

function LoginForm(props: any) {
  const { validation = [], error = '', login } = props;
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const doLogin = () => {
    login(user, password);
  };
  
  const validationList = <ValidationList validation={validation} error={error} />
  
  return (
    <Fragment>
      <div className={"login__col"}>
        <h1>Innskráning</h1>
      </div>
      {validationList}
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
      <Button onClick={doLogin} children={'Skrá inn'}/>
      <div className={"login__col"}>
        <Link className={"login__link"} to="/register">Nýskráning</Link>
      </div>
    </Fragment>
  );
}

export default function Login(props: any) {
  const {
    loginUser, authenticated, validation, error, fetching
  } = useContext(CurrentUser);;
  
  return (
    <Fragment>
        { 
          authenticated
          ? <Redirect to="/" />//<LoggedIn user={user} logout={logoutUser} />
          : fetching
            ? <Loading message={"Skrái inn"} />
            : <LoginForm validation={validation} error={error} login={loginUser} />
        }
    </Fragment>
  );
}