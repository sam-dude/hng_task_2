import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './routes/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
       path='/'
       element={<Layout />}
      >
        <Route element={<Home />} index/>
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
