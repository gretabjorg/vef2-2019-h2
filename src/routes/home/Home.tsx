import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import './Home.scss';

import Products from '../../components/products/Products';
import Categories from '../../components/categories/Categories';
import Button from '../../components/button/Button';

export default function Home() {

  return (
    <Fragment>
      <div className="fp">
        <Helmet title="Forsíða" />
        <h1 className="fp__heading">Nýjar vörur</h1>
        <Products limit={6} offset={0}/>
        <div className="fp__allcats">
          <Link
            to={{
              pathname: '/categories'
            }}
            >
              <Button children={'Skoða alla flokka'} />
            </Link>
        </div>
        <h2 className="fp__heading">Skoðaðu vöruflokkana okkar</h2>
        <Categories />
      </div>
    </Fragment>
  );
}