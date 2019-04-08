import React, { useState } from 'react';

import Products from '../../components/products/Products';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';

import './Category.scss';

export default function CategoryRoute(props: any) {
  const [ page, setPage ] = useState(0);
  const [ search, setSearch ] = useState('');

  const { id } = props.match.params;
  return (
    <div className="category">
      <Search />
      <Products limit={12} offset={page} category={id} search={search}/>
      <div className="category__page">
        { page ? <Button onClick={() => setPage(page - 12) } children={ "Fyrri síða" } /> : null }
        <p className="category__page__number">{`Síða ${page / 12 + 1}`}</p>
        <Button onClick={() => setPage(page + 12) } children={ "Næsta síða" } />
      </div>
    </div>
  );
}
