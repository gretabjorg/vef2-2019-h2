import React from 'react';
import Button from '../../components/button/Button';

import './Paging.scss';
export default function Paging(props: any) {
  const { hasNextPage, page: { page, setPage, limit } } = props;
  return (
    <div className="paging">
      { page ? <Button onClick={() => setPage(page - limit) } children={ "Fyrri síða" } /> : null }
      { page === 0 ? null : <p className="paging__number">{`Síða ${page / limit + 1}`}</p> }
      { hasNextPage ? <Button onClick={() => setPage(page + limit) } children={ "Næsta síða" } /> : null }
    </div>
  )
}