import React, { useState } from 'react';

import Products from '../../components/products/Products';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';

export default function CategoriesRoute() {
  const [ page, setPage ] = useState(0);
  return (
    <div className="category">
      <Search />
      <Products limit={12} offset={page}/>
      <div className="category__page">
        { page ? <Button onClick={() => setPage(page - 12) } children={ "Fyrri síða" }/> : null }
        <div>{`Síða ${page / 12 + 1}`}</div>
        <Button onClick={() => setPage(page + 12) } children={ "Næsta síða" }/>
      </div>
    </div>
  );
}
