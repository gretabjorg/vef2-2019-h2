import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from '../../components/login/LoginForm';
import Home from '../home/Home';

import { CurrentUser } from '../../context/currentUser';


export default function Login() {
  const {
    loginUser, authenticated, validation, error, fetching
  } = useContext(CurrentUser);;
  
  if (authenticated) {
    return <Route component={Home} />
  }

  return (
    <LoginForm validation={validation} error={error} login={loginUser} fetching={fetching}/>
  );
}