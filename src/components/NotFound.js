import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {state:'Error Not found'})
      // navigate(-1) // back prev one page
      // state communicate with other component, pass info to one to another, especially manual navigation
    }, 1000)
  },[]);
  return (
    <div>
      {/* <Navigate to='/home' /> */}
      <h2>Not Found</h2>
    </div>
  )
}

export default NotFound