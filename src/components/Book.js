import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import BookLayout from './BookLayout';

function Book() {
    const book = useParams();
    // const  obj = useOutletContext();
    // console.log(obj);
    console.log(book);
    return (
      <div style={{textAlign: 'center'}}>
        <BookLayout />
        <h2>Book {JSON.stringify(book.bookId)} </h2>
      </div>
    )
}

export default Book