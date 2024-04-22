import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import Book from './Book';
import NewBook from './NewBook';
import BookLayout from './BookLayout';

function BookRoutes() {
  return (
    <>
        <BookLayout />
        <Routes>
            <Route index element={<BookList />} />
            <Route path=':bookId' element={<Book />} />
            <Route path='new' element={<NewBook />} />
        </Routes>
    </>
  )
}

export default BookRoutes