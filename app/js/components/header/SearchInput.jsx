import React from 'react';

const SearchInput = props => (
  <input
    className="search"
    placeholder="חיפוש"
    value={props.searchTerm}
    onChange={props.changeHandler}
  />
);

export default SearchInput;
