import React, { Fragment } from 'react';

import Input from '../input/Input';
import Button from '../button/Button';


interface ISearchProps {
  searchString: string;
  setSearch: Function
  submitSearch: () => void;
}


import './Search.scss';

export default function Search(props: ISearchProps) {
  const { searchString, setSearch, submitSearch } = props;

  return (
    <Fragment>
      <div className={"search"}>
        <label className={"search__label"}>{'Leita:'}</label>
        <Input value={searchString} setValue={setSearch}/>
        <Button className={"search__button"} onClick={ submitSearch } small={true} children={'Leita'}/>
      </div>
    </Fragment>
  );
}
