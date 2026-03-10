import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className='flex justify-between bg-gray-100 p-5 px-10 items-center '>
      <img className='rounded-lg' width="80px" 
       src='https://i.pinimg.com/564x/8a/01/cc/8a01cc0579be056ecc8dfa2f07bd42aa.jpg' alt=''
      ></img>
      
    <nav>
        <ul className='flex justify-end gap-10 font-semibold  '>
            <li>
                <NavLink to="/" className={({isActive})=>isActive ? "text-blue-500": " "}>Home
                </NavLink>

            </li>
            <li>
                <NavLink to="/userlist" className={({isActive})=>isActive ? "text-blue-500": " "}>UserList
                </NavLink>

            </li>
              <li>
                <NavLink to="/adduser" className={({isActive})=>isActive ? "text-blue-500": " "}>AddUser
                </NavLink>

              </li>
        </ul>
    </nav>
    </div>
  )
}

export default Header