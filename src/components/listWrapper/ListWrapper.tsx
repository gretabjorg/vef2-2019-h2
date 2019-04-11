import React from 'react';

import './List.scss';

/**
 * Higher order component sem tekur fylki og notar það til þess
 * að búa til lista sem er raðað með flexbox. WrapppedComponent
 * er component sem sér um að birta hvert og eitt stak úr fylkinu,
 * en gögnin úr stakinu eru send sem prop í WrappedComponent
 * 
 * @param WrappedComponent Component til þess að bira gögnin úr items
 * @param items Fylki af gögnum
 */
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