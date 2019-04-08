import React from 'react';

import CategoryThumb from '../categoryThumb/CategoryThumb';

import { getCategories } from '../../api/index';
import listWrap from '../listWrapper/ListWrapper';

export default function Categories() {
  const List = listWrap(CategoryThumb, getCategories);
  return (
    <React.Fragment>
      <List values={[12, 0]}/>
    </React.Fragment>
  );
}
