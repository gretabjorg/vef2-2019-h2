import React, { createContext, useState } from 'react';
import { postLogin } from '../api/index';

//const user = null;

const CurrentUser = createContext({
  fetching: false,
  authenticated: false,
  user: {
    id: 0,
    username: '',
    email: '',
    admin: false
  },
  validation: [],
  error: '',
  token: '',
  loginUser: (username: String, password: String) => {},
  logoutUser: () => {},
});

function User(props: any) {
  const [ fetching, setFetching ] = useState(false);
  const [ authenticated, setAuth ] = useState(false);
  const [ validation, setValidation ] = useState([]);
  const [ error, setError ] = useState('');
  const [ currentUser, setUser ] = useState({
    id: 0,
    username: '',
    email: '',
    admin: false
  });
  const [ token, setToken ] = useState('');

  const loginUser = async (username: String, password: String) => {
    setFetching(true);
    let login: any;
    try {
      login = await postLogin(username, password);
    } catch (e) {
      console.error(e.message);
    }
    if (typeof login.length === 'number' && login.lengt > 0) {
      setValidation(login);
      setFetching(false);
    }

    if (login.error) {
      setError(login.error);
    }
    if (login.token) {
      const { user, token } = login;
      setToken(token);
      setUser(user);
      setAuth(true);
      setFetching(false);
    }
  };

  const logoutUser = async () => {
    setUser({
      id: 0,
      username: '',
      email: '',
      admin: false
    });
    setToken('');
    setAuth(false);
  };

  const state = {
    fetching,
    authenticated,
    user: currentUser,
    validation,
    error,
    token,
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