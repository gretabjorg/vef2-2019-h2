import React, { Fragment, useState, useContext } from 'react';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import { CurrentUser, User } from '../../context/currentUser';
// import User, { Context } from '../../context/testCurrentUser';

import './Login.scss';

function LoggedIn(props: any) {
  const { user, message } = useContext(CurrentUser);
  // const { user, message } = useContext(Context);


  return (
    <p>{"whatever"}</p>
  )
}

function LoginForm(props: any) {
  const { message, login } = props;
  // const { loginUser } = useContext(CurrentUser);
  // const { loginUser, logoutUser, authenticated, message} = useContext(CurrentUser);
  console.log(message);
  //const { login, error } = props;
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const doLogin = () => {
    login(user, password);
  }

  return (
    <Fragment>
      <h1>Innskráning</h1>
      <label>Notandanafn</label>
      <Input value={user} setValue={setUser}/>
      <label>Lykilorð</label>
      <Input value={password} setValue={setPassword}/>
      <Button onClick={doLogin} children={'Skrá inn'}/>
      {/* <p>{message}</p> */}
    </Fragment>
  );
}

function LoginContent() {
  // const { user, authenticated, message, loginUser } = useContext(Context);
  const { user, loginUser, logoutUser, authenticated, message} = useContext(CurrentUser);
  return (
    <Fragment>
        { 
          authenticated
          ? <LoggedIn user={user}/>
          // : <LoginForm />//login={loginUser} error={message}/>
          : <LoginForm message={message} login={loginUser}/>
        }
    </Fragment>
  );
}

export default function Login() {
  // loginUser('gunnar', 'agoodpasswordman');
  return (
    <User>
      <LoginContent />
    </User>
  );
};