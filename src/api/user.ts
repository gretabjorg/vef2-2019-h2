import { baseurl } from './apiUtils';

async function postLogin(username: string, password: string) {
  const path = 'users/login';
  const url = new URL(path, baseurl);

  const user = {
    username,
    password
  }

  const result = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': "application/json",
    },
    body:JSON.stringify(user),
  });

  return result.json();
}

async function postRegister(username: String, password: String, email: String) {
  const path = 'users/register';
  const url = new URL(path, baseurl);

  const user = {
    username,
    password,
    email
  }
  
  const result = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': "application/json",
    },
    body:JSON.stringify(user),
  });

  return result.json();
}

export {
  postLogin,
  postRegister
}