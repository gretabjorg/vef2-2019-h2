import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import { CurrentUser, User } from '../../context/currentUser';

import './Login.scss';

function LoggedIn(props: any) {
  const { user } = props;
  return (
    <p>{
      `Velkominn ${user.username}`
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

  const validationList = validation.map((validation: any) => (
    <div>
      <p>{validation.field}</p>
      <p>{validation.error}</p>
    </div>
  ));
    
  return (
    <Fragment>
      <div className={"login__col"}>
        <h1>Innskráning</h1>
      </div>
      <div className={"login__col"}>
        {error}
        {validationList}
      </div>
      <div className={"login__col"}>
        <label className={"login__label"}>Notandanafn:</label>
        <Input value={user} setValue={setUser}/>
      </div>
      <div className={"login__col"}>
        <label className={"login__label"}>Lykilorð:</label>
        <Input value={password} setValue={setPassword}/>
      </div>
      <Button onClick={doLogin} children={'Skrá inn'}/>
      <div className={"login__col"}>
        <Link className={"login__link"} to="/register">Nýskráning</Link>
      </div>
    </Fragment>
  );
}

function LoginContent() {
  const {
    user, loginUser, logoutUser, authenticated, validation, error
  } = useContext(CurrentUser);;
  return (
    <Fragment>
        { 
          authenticated
          ? <LoggedIn user={user} logout={logoutUser} />
          : <LoginForm validation={validation} error={error} login={loginUser}/>
        }
    </Fragment>
  );
}

export default function Login() {
  // loginUser('gunnar', 'agoodpasswordman');
  return (
    <LoginContent />
  );
};