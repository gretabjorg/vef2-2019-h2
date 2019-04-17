import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ValidationList from '../../components/validationList/ValidationList';

import { ValidationError } from '../../api/types';

import './Register.scss';

interface IRegisterProps {
  validation: ValidationError[];
  loading: boolean;
  submit: () => void;
  username: { 
    username:string,
    setUsername: Function
  };
  password: { 
    password:string,
    setPassword: Function
  };
  email: { 
    email:string,
    setEmail: Function
  };
}

export default function Register(props: IRegisterProps) {

  const { validation, loading, submit } = props;
  const {
    username: { username, setUsername },
    password: { password, setPassword },
    email: { email, setEmail },
  } = props;
  return (
    <>
      <div className={"register_col"}>
        <h1>Nýskráning</h1>
        <ValidationList validation={validation} />
      </div>
      <div className={"register__col"}>
        <label className={"register__label"}>Notendanafn:</label>
        <Input value={username} setValue={setUsername}/>
      </div>
      <div className={"register__col"}>
        <label className={"register__label"}>Lykilorð:</label>
        <Input value={password} setValue={setPassword} type="password"/>
      </div>
      <div className={"register__col"}>
        <label className={"register__label"}>Netfang:</label>
        <Input value={email} setValue={setEmail}/>
      </div>
      {loading && (
        <p>Loading..</p>
      )}
      <Button onClick={submit} children={'Nýskráning'}/>
      <div className={"register__col"}>
        <Link className={"register__link"} to="/login">Innskráning</Link>
      </div>
    </>
  )
}
