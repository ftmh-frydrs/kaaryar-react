import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyPosts from '../MyPosts';
import './style.css';


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <MyPosts />
    }
  ])

  return (
    <section className='app'>
       <RouterProvider router={router} />
    </section>
  );
}

export default App;
