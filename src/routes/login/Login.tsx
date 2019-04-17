import React, { useContext, useLayoutEffect } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from '../../components/login/LoginForm';
import Home from '../home/Home';

import { CurrentUser } from '../../context/currentUser';


export default function Login() {
  const {
    loginUser, authenticated, validation, error, fetching, clearErrors
  } = useContext(CurrentUser);;
  
  const errorMessages = Array.from(validation);

  useLayoutEffect(() => {
    return clearErrors();
  }, []);

  if (authenticated) {
    return <Route component={Home} />
  }

  return (
    <LoginForm validation={errorMessages} error={error} login={loginUser} fetching={fetching}/>
  );
}