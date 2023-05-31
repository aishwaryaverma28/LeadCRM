import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Error from './Components/Error'
import DashBoard from './Components/DashBoard'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: '/DashBoard',
    element: <DashBoard/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
