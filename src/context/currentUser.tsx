import React, { createContext, useState } from 'react';
import { postLogin } from '../api/index';

const noUser = { id: 0, username: '', email: '', admin: false }

const CurrentUser = createContext({
  fetching: false,
  authenticated: false,
  user: noUser,
  validation: [],
  error: '',
  token: '',
  loginUser: (username: String, password: String) => {},
  logoutUser: () => {},
});

function User(props: any) {
  const userFromLocal = JSON.parse(localStorage.getItem('user') || 'null');
  const tokenFromLocal = JSON.parse(localStorage.getItem('token') || 'null');
  
  const user = userFromLocal ? userFromLocal : noUser;
  const token = tokenFromLocal ? tokenFromLocal : '';
  
  const [ fetching, setFetching ] = useState(false);
  const [ authenticated, setAuth ] = useState(!!token);
  const [ validation, setValidation ] = useState([]);
  const [ error, setError ] = useState('');
  const [ currentUser, setUser ] = useState(user);
  const [ currentToken, setToken ] = useState(token);
  
  const loginUser = async (username: String, password: String) => {
    setFetching(true);
    let login: any;
    try {
      login = await postLogin(username, password);
    } catch (e) {
      console.error(e.message);
    }
    if (typeof login.length !== 'undefined' && login.lengt > 0) {
      setValidation(login);
      setFetching(false);
    }

    if (login.error) {
      setError(login.error);
    }
    
    if (login.token) {
      const { user, token } = login;
      setToken(token);
      localStorage.setItem('token', JSON.stringify(token));
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      setAuth(true);
      setFetching(false);
    }
  };

  const logoutUser = async () => {
    localStorage.removeItem('user');
    setUser({
      id: 0,
      username: '',
      email: '',
      admin: false
    });
    localStorage.removeItem('token');
    setToken('');
    setAuth(false);
  };

  const state = {
    fetching,
    authenticated,
    user: currentUser,
    validation,
    error,
    token: currentToken,
    loginUser,
    logoutUser,
  };

  return (
    <CurrentUser.Provider
      value={{...state}}
    >
      {props.children}
    </CurrentUser.Provider>
  );
}

export {
  CurrentUser,
  User,
}