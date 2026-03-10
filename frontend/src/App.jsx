import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import AddUser from './components/AddUser'
import Home from './components/Home'
import User from './components/User'
import Userlist from './components/Userlist'
import Rootlayout from './components/Rootlayout'
function App() {
  const routeObj=createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout />,
      children:[
    {
      path: '',
      element: <Home />,
    },
    {
      path: "userlist",
      element:< Userlist />
    },
    {
      path: "adduser",
      element:<AddUser/>
    },
    {
      path: "user",
      element:<User />
    },
  ]}
    
  ])
  return <RouterProvider router={routeObj} />
}

export default App