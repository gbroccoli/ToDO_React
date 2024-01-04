import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {
  createBrowserRouter, RouterProvider, useNavigate
} from "react-router-dom"
import './index.css'
import Login from './pages/login/Login.tsx'
import { isAuth } from "@/middleware/isAuth.ts"
import IsAuthLayout from './middleware/layout/IsAuthLayout.tsx'

const RedicToProfile: React.FC = () => {
  const navigate = useNavigate()

  const checkAuth = async () => {
    const authorization = await isAuth()

    if (authorization) {
      navigate("/dash")
    }
  }

  checkAuth()

  return null
}

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RedicToProfile />
        <Login />
      </>
    )
  },

  {
    path: "/dash",
    element: <IsAuthLayout />,
    children: [
      {
        path: "/dash",
        element: <div>dsjfhsdjfnlksdnflksdnnkldsbnflnsdlfnsdl</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
