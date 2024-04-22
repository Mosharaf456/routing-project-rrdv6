import Login from './components/Login';
import Book from './components/Book';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import { lazy } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
function App() {
  return (
    <>
      <nav style={{textAlign: 'center'}}>
        <ul style={{display: 'flex' , justifyContent: 'space-around' }}>
          <li>
              <Link to='/home'>Home</Link>
          </li>
          <li>
              <Link to='/books'>Books</Link>
          </li>
          <li>
              <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:bookId' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} />

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
