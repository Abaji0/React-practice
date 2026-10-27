import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
    const { name } = useParams();
    const navigate = useNavigate();

    const GoBackHandler = () =>{
       // navigate("/user"); 
       navigate(-1);
            }



  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-5xl mb-2">User Detail</h1>
      <h1 className='text-2xl mt-3'>hii!! {name}</h1>
      <button onClick={GoBackHandler} className="p-3 bg-zinc-300 text-white px-3 mt-5">Go Back</button>
    </div>
  )
}

export default UserDetail