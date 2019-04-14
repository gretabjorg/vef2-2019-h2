import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Register.scss';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { postRegister } from '../../api';
import { async } from 'q';

export default function Register(props: any) {
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

  const validationList = validation.map((validation: any, i: number) => (
    <li key={i}>{`${validation.field}, ${validation.error}`}</li>
  ));

  return (
    <Fragment>
      <div>
        <h1>Nýskráning</h1>
        {
          validation.length === 0
            ? ''
            : <ul>{validationList}</ul>
        }
        <label>Notendanafn:</label>
        <Input value={username} setValue={setUsername}/>
        <label>Lykilorð:</label>
        <Input value={password} setValue={setPassword}/>
        <label>Netfang:</label>
        <Input value={email} setValue={setEmail}/>
        {loading && (
          <p>Loading..</p>
        )}
        <Button onClick={doRegister} children={'Nýskráning'}/>
        <Link to="/login">Innskráning</Link>
      </div>
    </Fragment>
  )
}
