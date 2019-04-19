import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import './Home.scss';

import Products from '../../components/products/Products';
import Categories from '../../components/categories/Categories';
import Button from '../../components/button/Button';

import useGetter from '../../api/fetchItems';
import { getProducts, getCategories } from '../../api/product';


export default function Home() {
  const initialState = {
    limit: 0,
    offset: 0,
    items: [],
    _links: {
      self: {
        href: {}
      },
      prev: {
        href: {}
      },
      next: {
        href: {}
      }
    }
  };

  const { items } = useGetter(
    getProducts, initialState, 6, 0
  );
  
  const { items: categories } = useGetter(
    getCategories, initialState, 12, 0
  );
    // console.log(categories);
  return (
    <Fragment>
      <div className="fp">
        <Helmet title="Forsíða" />
        <h1 className="fp__heading">Nýjar vörur</h1>
        <Products items={items}/>
        <div className="fp__allcats">
          <Link
            to={{
              pathname: '/categories'
            }}
            >
              <Button children={'Skoða alla flokka'}/>
            </Link>
        </div>
        <h2 className="fp__heading">Skoðaðu vöruflokkana okkar</h2>
        <Categories items={categories}/>
      </div>
    </Fragment>
  );
}