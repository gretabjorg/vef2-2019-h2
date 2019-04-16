import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './SystemPages.scss';
import { CurrentUser } from '../../context/currentUser';

export default function AuthRoute(RouteComponent: any, path: string) {
  const { authenticated } = useContext(CurrentUser);
  return (
    authenticated
    ? <Route path={path} exact component={RouteComponent} />
    : <Redirect to="/login" />
  )
}
