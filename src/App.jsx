import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './routes/Home'
import MovieDetail, { MovieLoader } from './routes/MovieDetail'
import ErrorElement from './components/ErrorElement'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
       path='/'
       element={<Layout />}
      >
        <Route element={<Home />} index/>
        <Route path="movies">
          <Route element={<MovieDetail />} path=':id' loader={MovieLoader} errorElement={<ErrorElement />}/>
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
