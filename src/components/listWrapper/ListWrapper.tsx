import React from 'react';

import './List.scss';

const listWrap = (WrappedComponent: any, items = []) => (props: any) => {

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