import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import Book from './Book';
import NewBook from './NewBook';
import BookLayout from './BookLayout';
import PrivateOutlet from './PrivateOutlet/PrivateOutlet';

function BookRoutes() {
  return (
    <>
        <BookLayout />
        <Routes>
            <Route element={<PrivateOutlet />}> 
                <Route index element={<BookList />} />
                <Route path=':bookId' element={<Book />} />
                <Route path='new' element={<NewBook />} />
            </Route>

        </Routes>
    </>
  )
}

export default BookRoutes