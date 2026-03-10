import React from 'react'
import { useLocation } from 'react-router'
function User() {
   let { state } = useLocation();

  console.log(state.user);
  return (
    <div>
      <p>{state?.user?.name}</p>
      <p>{state?.user?.email}</p>
      <p>{state?.user?.dateofBirth && new Date(state.user.dateofBirth).toLocaleDateString()}</p>
    </div>
  );
 
}

export default User