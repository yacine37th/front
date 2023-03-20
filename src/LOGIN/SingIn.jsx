import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from 'axios';
function SingIn({setform}) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState("")
   //const navigate = useNavigation();
   const [_,setCookies] = useCookies(["access_token"])
   const navigate = useNavigate();
   var res ="dede";
   const submit =async (e)=>{
    e.preventDefault()
    try {
       res = await axios.post("http://localhost:3001/auth/login", {
        email,password
      });
      setCookies('access_token',res.data.token);
      window.localStorage.setItem('userID',res.data.token);
      navigate('/home')
    } catch (error) {
      alert(error)
    }
  };


  return (
    <div className='w-96 p-7'>
      <h2>Connect</h2>
    <form className='flex flex-col w-96'>
        <label htmlFor="email">Enter Your Email</label>
        <input onChange={(e)=>{setemail(e.target.value)}} className='border-2 border-black' type="text" name='email' placeholder='Enter your email'/>
        <label htmlFor="password">Enter Your password</label>
        <input onChange={(e)=>{setpassword(e.target.value)}} className='border-2 border-black'  type="password" name='password' placeholder='Enter your password'/>
        <button type='submit' onClick={submit}>Connect</button>
    </form>
   <div className='flex justify-between'>
   <Link to="/forgetpassword" className='text-gray-600'>
       forget password
    </Link>
    <a href='/register'> 
      create account
    </a>
   </div>
    </div>
  )
}

export default SingIn