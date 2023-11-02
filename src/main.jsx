import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UpdateCoffe from './components/UpdateCoffe.jsx'
import AddCoffe from './components/AddCoffe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffe')
  },
  {
    path: "/update/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffe/${params.id}`)
  },
  {
    path: "/add",
    element: <AddCoffe></AddCoffe>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
