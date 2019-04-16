import React, { createContext, useState } from 'react';
import { postLogin } from '../api/index';
import { IUser, ICurrentUser } from '../api/types';

const noUser: IUser = { id: 0, username: '', email: '', admin: false }

const initialUser: ICurrentUser = {
  authenticated: false,
  user: noUser,
  validation: [],
  error: '',
  token: '',
  loginUser: (username: string, password: string) => {},
  logoutUser: () => {},
  fetching: false,
}

const CurrentUser = createContext(initialUser);

function User(props: any) {
  const userFromLocal = JSON.parse(localStorage.getItem('user') || 'null');
  const tokenFromLocal = JSON.parse(localStorage.getItem('token') || 'null');
  
  const user = userFromLocal ? userFromLocal : noUser;
  const token = tokenFromLocal ? tokenFromLocal : '';
  
  const [ authenticated, setAuth ] = useState(!!token);
  const [ validation, setValidation ] = useState([]);
  const [ error, setError ] = useState('');
  const [ currentUser, setUser ] = useState(user);
  const [ currentToken, setToken ] = useState(token);
  const [ fetching, setFetching ] = useState(false);
  const loginUser = async (username: string, password: string) => {
    let login: any;
    setFetching(true);
    try {
      login = await postLogin(username, password);
      setFetching(false);
    } catch (e) {
      console.error(e.message);
    }

    if (login.length > 0) {
      setValidation(login);
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
    authenticated,
    user: currentUser,
    validation,
    error,
    token: currentToken,
    loginUser,
    logoutUser,
    fetching,
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