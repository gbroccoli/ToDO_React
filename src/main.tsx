import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter, RouterProvider, useNavigate
} from  "react-router-dom"
import './index.css'
import Login from './pages/login/Login.tsx'


const isAuth = (): boolean => {
  const cokiesValue = document.cookie
  .split(";")
  .find((row)=>row.startsWith("access_token"))

  return cokiesValue !== undefined

}

const RedicToProfile: React.FC = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    if (isAuth()) {
      navigate("/dash")
    }
  }, [])
}

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RedicToProfile/>
        <Login/>
      </>
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
