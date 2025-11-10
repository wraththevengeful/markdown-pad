import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import './index.css'
import App from './App.jsx'
import Main from './Components/Main.jsx'
import Header from './Components/Header.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/posts',
    element: <Main></Main>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
