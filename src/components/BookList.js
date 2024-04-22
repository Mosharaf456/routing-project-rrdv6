import React from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  return (
    <div>
      <h2>Book List</h2>
      <Link to='/books/1'>Book 1</Link>
      <br />
      <br />
      <Link to='/books/2'>Book 2</Link>
      <br /> 
      <Link to='/books/new'>Book 2</Link>

    </div>

  )
}

export default BookList