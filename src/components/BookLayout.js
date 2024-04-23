import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function BookLayout() {
  const [searchParam, setSearchParam] = useSearchParams({ n: 3});
  const number = searchParam.get("n");
    return (
      <div style={{textAlign: 'center'}}>
        <Link to='/books/1'>Book 1</Link>
        <br />
        <br />
        <Link to='/books/2'>Book 2</Link>
        <br /> 
        <Link to={`/books/${number}`}>Book {number}</Link>
        <br /> 
        <Link to='/books/new'>New Book</Link>
        <input type='text' value={number} onChange={ e => setSearchParam({n: e.target.value})} />

        <Outlet context={{ hello: 'World' }} />
      </div>
    )
}

export default BookLayout