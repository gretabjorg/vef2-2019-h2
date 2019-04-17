import React, { Fragment, useState, useContext } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import { CurrentUser } from '../../context/currentUser';
import { postRegister } from '../../api';

import './Register.scss';
import Home from '../../routes/home/Home';
import ValidationList from '../../components/validationList/ValidationList';

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
    <Fragment>
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
      <Button onClick={doRegister} children={'Nýskráning'}/>
      <div className={"register__col"}>
        <Link className={"register__link"} to="/login">Innskráning</Link>
      </div>
    </Fragment>
  )
}
