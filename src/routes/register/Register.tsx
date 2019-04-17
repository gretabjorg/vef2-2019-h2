import React, { useState, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { CurrentUser } from '../../context/currentUser';
import { postRegister } from '../../api';

import Home from '../../routes/home/Home';

import RegisterFrom from '../../components/register/RegisterFrom';

export default function Register() {
  const { authenticated } = useContext(CurrentUser)

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState([]);
  const [result , setResult] = useState('');
  

  const doRegister = async () => {
    setLoading(true);
    const result = await postRegister(username, password, email);
    const { errors } = result;
    if (errors) {
      setValidation(errors);
    } else {
      return setResult(result);
    }
    setLoading(false);
  }

  if (result) {
    return <Redirect to="/login"/>
  }

  if (authenticated) {
    return <Route component={Home} />
  }

  return (
    <RegisterFrom
      validation={validation}
      loading={loading}
      submit={doRegister}
      username={{username, setUsername}}
      password={{password, setPassword}}
      email={{email, setEmail}} />
  );
}
