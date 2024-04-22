import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function Book() {
    const book = useParams();
    const  obj = useOutletContext();
    console.log(obj);
    console.log(book);
    return (
      <div>
        <h2>Book {JSON.stringify(book.bookId)} {JSON.stringify(obj.hello)}</h2>
      </div>
    )
}

export default Book