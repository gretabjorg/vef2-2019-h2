import React from 'react';

import CategoryThumb from '../categoryThumb/CategoryThumb';

import listWrap from '../listWrapper/ListWrapper';

export default function Categories(props: any) {
  const { items } = props;
  const List = listWrap(CategoryThumb, items);
  return (
    <React.Fragment>
      <List/>
    </React.Fragment>
  );
}
