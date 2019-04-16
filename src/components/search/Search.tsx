import React, { Fragment } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';

interface ISearchProps {
  searchString: string;
  setSearch: Function
  submitSearch: () => void;
}

export default function Search(props: ISearchProps) {
  const { searchString, setSearch, submitSearch } = props;

  return (
    <Fragment>
      <label>{'Leita'}</label>
      <Input value={searchString} setValue={setSearch}/>
      <Button onClick={ submitSearch }small={true} children={'Leita'}/>
    </Fragment>
  );
}
