import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from 'axios';
function ForgetPassword({setform}) {
  // const [email, setemail] = useState("");
  //  //const navigate = useNavigation();
  //  const [_,setCookies] = useCookies(["access_token"])
  //  const navigate = useNavigate();

  //  const submit =async (e)=>{
  //   e.preventDefault()
  //   try {
  //      await axios.post("http://localhost:3001/auth/reset", 
  //       email
  //     );
  //   } catch (error) {
  //     alert('Reset Erreur ');
  //     console.log(error.message);
  //   }
  // }
  
  return (
    <div className='w-96 p-7'>
      {/* <h2>Connect</h2>
    <form className='flex flex-col w-96'>
        <label htmlFor="email">Enter Your Email</label>
        <input onChange={(e)=>{setemail(e.target.value)}} className='border-2 border-black' type="text" name='email' placeholder='Enter your email'/>
        <button type='submit' onClick={submit}>Connect</button>
    </form>
   <div className='flex justify-between'>
   <Link to="/login" className='text-gray-600'>
       login
    </Link>
   </div> */}
    </div>
  )
}

export default ForgetPassword