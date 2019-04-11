import React, { createContext, useState } from 'react';
import { postUser } from '../api/index';

const user = JSON.parse(localStorage.getItem('user') || 'null');

const CurrentUser = createContext({
  fetching: false,
  authenticated: !!user,
  user,
  message: '',
  loginUser: (username: String, password: String) => {},
  logoutUser: () => {},
});

function User(props: any) {
  const [ fetching, setFetching ] = useState(false);
  const [ authenticated, setAuth ] = useState(!!user);
  const [ message, setMessage ] = useState('');
  const [ currentUser, setUser ] = useState(user);

  const loginUser = async (username: String, password: String) => {
    setFetching(true);
    let login: any;
    try {
      login = await postUser(username, password);
      setMessage(login);
    } catch (e) {
      setMessage(e.message);
    }

    if (login.error) {
      setFetching(false);
    }

    if (login.user) {
      console.log('logged in');
      const { user } = login;
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setAuth(true);
      setFetching(false);
    }
  };

  const logoutUser = async () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <CurrentUser.Provider
      value={{
        fetching,
        authenticated,
        user: currentUser,
        message: message,
        loginUser: loginUser,
        logoutUser: logoutUser
      }}
    >
      {props.children}
    </CurrentUser.Provider>
  );
}

export {
  CurrentUser,
  User,
}