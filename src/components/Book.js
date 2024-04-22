import React from 'react';
import { useParams } from 'react-router-dom';

function Book() {
  const bookId = useParams();
  console.log(bookId);
  return (
    <div>
      <h2>Book</h2>
    </div>
  )
}

export default Book