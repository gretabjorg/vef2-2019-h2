import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { postRegister } from '../../api';
import { async } from 'q';

import './Register.scss';

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
      <div className={"register_col"}>
        <h1>Nýskráning</h1>
        {
          validation.length === 0
            ? ''
            : <ul className={"register__ul"}>{validationList}</ul>
        }
      </div>
      <div className={"register__col"}>
        <label className={"register__label"}>Notendanafn:</label>
        <Input value={username} setValue={setUsername}/>
      </div>
      <div className={"register__col"}>
        <label className={"register__label"}>Lykilorð:</label>
        <Input value={password} setValue={setPassword}/>
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
