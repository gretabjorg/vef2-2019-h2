import React, { useContext, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';
import { CurrentUser } from '../../context/currentUser';

export default function Home() {
  const { user, logoutUser: logout, authenticated } = useContext(CurrentUser);
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          <Link className="header__titleLink" to="/">Vefforritunarbúðin</Link>
        </h1>
        <div className="header__nav">
          <div className="header__nav__links">
            {
              authenticated
                ? (
                    <Fragment>
                      <NavLink 
                        onClick={() => {logout()}}
                        className="header__link"
                        activeClassName="header__link"
                        exact to="/"
                      >
                        {`${user.username}(útskrá)`}
                      </NavLink>
                      <NavLink
                        className="header__link"
                        activeClassName="header__link header__link--selected"
                        exact to="/orders"
                      >
                        Pantanir
                      </NavLink>
                    </Fragment>
                  )
                : (
                    <Fragment>
                      <NavLink
                        className="header__link"
                        activeClassName="header__link header__link--selected"
                        exact to="/register"
                      >
                        Nýskrá
                      </NavLink>
                      <NavLink
                        className="header__link"
                        activeClassName="header__link header__link--selected"
                        exact to="/login"
                      >
                        Innskrá
                      </NavLink>
                    </Fragment>
                  )
            }
            <NavLink
              className="header__link header__cart_link"
              activeClassName="header__link header__link--selected"
              exact to="/cart"
            >
              Karfa
            </NavLink>
          </div>
          <div className="header__nav__links">
            <NavLink
              className="header__link"
              activeClassName="header__link header__link--selected"
              exact to="/"
            >
              Nýjar vörur
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link header__link--selected"
              to="/categories"
            >
              Flokkar
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
