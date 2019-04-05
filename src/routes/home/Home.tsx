import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import './Home.scss';

import Products from '../../components/products/Products';
import Button from '../../components/button/Button';

export default function Home() {

  return (
    <Fragment>
      <Helmet title="Forsíða" />
      <Products limit={6}/>
      <Button children={'Skoða alla flokka'} />
      {/* <Categories /> */}
    </Fragment>
  );
}