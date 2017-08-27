import React from 'react';

const BooksFilterInput = ({setFilter}) => {
  return(
    <div id="filter-input">
    <strong>Filter</strong>
    <br/>
    <input
     type="text"
     name= "title"
     placeholder="filter"
     onChange={setFilter}
     />
     </div>
  )
};

export default BooksFilterInput;

