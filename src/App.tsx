import React, { Component, useContext } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import { CurrentUser } from './context/currentUser';

import Header from './components/header/Header';

import Home from './routes/home/Home';
import Register from './routes/register/Register';
import Login from './routes/login/Login';
import Categories from './routes/categories/Categories';
import Category from './routes/category/Category';
import Product from './routes/product/Product';
import Cart from './routes/cart/Cart';
import Orders from './routes/orders/Orders';
import Order from './routes/orders/Order';

import NotFound from './routes/system-pages/NotFound';

import './App.scss';

type Props = {
  location: Location;
};

function App(props: Props) {
  const { authenticated } = useContext(CurrentUser);

  return (
    <React.Fragment>
      <Helmet defaultTitle="Vefforritunarbúðin" titleTemplate="%s – Vefforritunarbúðin" />

      <Header />

        <div className="app">
          <main className="main__content">
            <Switch location={props.location}>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/categories/" exact component={Categories} />
              <Route path="/categories/:id" exact component={Category} />
              <Route path="/product/:id" exact component={Product} />
              {
                authenticated
                ? <Route path="/cart" exact component={Cart} />
                : <Redirect to="/login" />
              }
              <Route path="/orders" exact component={Orders} />
              <Route path="/orders/:id" exact component={Order} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
    </React.Fragment>
  );
}

export default withRouter(App);
