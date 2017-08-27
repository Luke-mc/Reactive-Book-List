import React from 'react';

const Book = ({title, author}) => {
  return(
      <li>
        <h2> { title } </h2>
        <p> { author } </p>
      </li>
  )

};

export default Book;