import React from 'react';

import './SystemPages.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

export default function NotFound() {
  return (
    <div className="system-page">
      <h1 className="system-page__context">Síða fannst ekki</h1>
      <Link className="system-page__context" to="/">Aftur á forsíðu</Link>
    </div>
  )
}
