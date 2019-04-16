import React from 'react';
import { ValidationError } from '../../api/types';

import './ValidationList.scss';

export default function ValidationList({ validation }:{ validation: ValidationError[] }) {
  let i = 1;
  const validationItems = validation.map((validation: any) => (
    <li key={i++}>{`${validation.field}, ${validation.error}`}</li>
    ));

  return (
    <ul className="validation_list">
      { validationItems }
    </ul>
  );
}