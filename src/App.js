// import { Suspense, lazy } from 'react';

import Login from './components/Login';
import Book from './components/Book';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import { BrowserRouter as Router, Link, Routes, Route, useRoutes, NavLink, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookLayout from './components/BookLayout';

// const Home = lazy(() => import('./components/Home'));
import Home from './components/Home';
import BookRoutes from './components/BookRoutes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  // const element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: 'login',
  //     element: <Login />
  //   },
  //   {
  //     path: '/home',
  //     element: <Home />
  //   },
  // ]);
  
  const location = useLocation();

  return (
    <>
    {/* location fixed this conetnt on all over the route */}
      <Routes location='/books'>
        <Route path='/books' element={<h1>Extra Content</h1>} />
      </Routes>
      <nav style={{textAlign: 'center'}}>
        <ul style={{display: 'flex' , justifyContent: 'space-around' }}>
          <li>
            {/* Link property replace which erase the back navigation to logged in to login page*/}
              {/* <Link to='/home'>Home</Link> */}
              <NavLink to='/home' state='Hi Home Page'> 
                Home 
              </NavLink>
          </li>
          <li>
              <Link to='/books'>Books</Link>
          </li>
          <li>
              <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>

        {/* {element} */}
         {(location.state !== null)? JSON.stringify(location.state) : ''}
    

      <Routes>

        <Route path='/' element={<Home />} />
        <Route 
            path='/books/*' 
            element={ 
              <PrivateRoute> 
                <BookRoutes /> 
              </PrivateRoute>
            } 
          />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
