import { useState } from 'react'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    ),
    {
      basename: '/react-template1', // Set basename to match your GitHub Pages repo name
    }
  )

  return <RouterProvider router={router} />
}

export default App
