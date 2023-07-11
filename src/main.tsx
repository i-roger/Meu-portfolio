import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Contato from './routes/Contato'
import ErrorPage from './routes/ErrorPage'

// 1 - Configurando Router <---------------
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>, //Configura página de erro! <--------------
    children:[ 
      {
      path: "/",
      element: <Home/>,
    },
      {
      path: "sobre",
      element: <Sobre/>,
    },
    {
      path: "contato",
      element: <Contato/>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
