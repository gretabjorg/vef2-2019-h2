import React from 'react';
import { ValidationError, RequestError } from '../../api/types';

import './ValidationList.scss';

export default function ValidationList({ validation, error }:{ validation: ValidationError[], error: RequestError }) {
  let i = 1;
  const validationItems = validation.map((validation: any) => (
    <li key={i++}>{`${validation.field}, ${validation.error}`}</li>
    ));

  return (
    <ul className="validation_list">
      { validationItems }
      {error ? <li key={i++}>{error}</li> : null}
    </ul>
  );
}