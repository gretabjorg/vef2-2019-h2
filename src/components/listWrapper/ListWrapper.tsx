import React from 'react';

import './List.scss';

import useItemGet from '../dataFetch/fetchItems'

const listWrap = (WrappedComponent: any, getter: Function) => (props: any) => {
  const { items } = useItemGet(
    getter, ...props.values
    )
  const list = 
    items.map((item: any) =>
      <div className="list__col">
        <WrappedComponent {...item} key={item.id}/>
      </div>
    );
  return (
    <React.Fragment>
      <div className="list">
        <div className="list__row">
          { list }
        </div>
      </div>
    </React.Fragment>
  );
}

export default listWrap;