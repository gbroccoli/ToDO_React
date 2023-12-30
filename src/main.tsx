import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {
  createBrowserRouter, RouterProvider, useNavigate
} from  "react-router-dom"
import './index.css'
import Login from './pages/login/Login.tsx'
import $api from './server/server.ts'


const isAuth = () => {

  const auth = $api.get("/auth/authorization")
  .then((res) => {
    return res.data.authorization
  })    

  return auth
}

const RedicToProfile: React.FC = () => {
  const navigate = useNavigate()

  const checkAuth =  async () => {
    const authorization = await isAuth()

    if (authorization) {
      console.log("dsadafasfas");
      
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
        <RedicToProfile/>
        <Login/>
      </>
    )
  },

  {
    path: "/dash",
    element: <>sdfsd</>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
