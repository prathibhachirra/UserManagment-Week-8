import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Userlist() {

let [users,setUsers]=useState([]);
let navigate=useNavigate()

useEffect(()=>{

async function getUsers(){

try{

let res=await fetch("http://localhost:2000/user-api/users",{
method:"GET",
});

if(res.status===200){

let resObj=await res.json();

setUsers(resObj.payload);
}

}catch(err){
console.log(err)
}
}

getUsers();

},[]);


//go to user
const gotoUser=(userObj)=>{
navigate("/user",{state:{user:userObj}})
}

return (
<div className='min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200 p-10'>

<h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
List of Users
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{users?.map((userObj)=>(

<div
key={userObj.email}
className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer'
onClick={()=>gotoUser(userObj)}
>

<p className="text-2xl font-semibold text-blue-700 capitalize mb-4">
{userObj.name}
</p>

<p className="text-gray-600 text-sm break-all mb-3">
{userObj.email}
</p>

<p className='text-lg text-gray-700'>
{new Date(userObj.dateofBirth).toLocaleDateString()}
</p>

</div>

))}

</div>

</div>
);
}

export default Userlist