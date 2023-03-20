import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from 'axios';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


function SingIn() {
  const schema = yup.object().shape({
    email: yup.string().email().required(""),
    password: yup.string().min(8).required(),    
  });
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const { register, handleSubmit , getValues, formState : {errors} } = useForm({
    resolver: yupResolver(schema),
  });

   const [_,setCookies] = useCookies(["access_token"])
   const navigate = useNavigate();

   const submit =async ()=>{
   // e.preventDefault()
    try {
       const res = await axios.post("http://localhost:3001/auth/login", {
        email,password
      });
      setCookies('access_token',res.data.token);
      window.localStorage.setItem('userID',res.data.token);
      alert('login success')
      navigate('/home')
    } catch (error) {
      alert(error)
    }
  };


  return (
    <div className='w-96 p-7'>
      <h2>Connect</h2>
    <form className='flex flex-col w-96' onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Enter Your Email</label>
        <input 
           {...register("email")}
             className='border-2 border-black' type="text" name='email' placeholder='Enter your email'/>
                 <p>{errors.email?.message}</p>
        <label htmlFor="password">Enter Your password</label>
        <input 
            {...register("password")}
           className='border-2 border-black'  type="password" name='password' placeholder='Enter your password'/>
               <p>{errors.password?.message}</p>
        <button type='submit' 
         onMouseEnter={()=>{ const values = getValues();
          setemail( values?.email);
          setpassword(values?.password);
          console.log(password);
          console.log(email)
         }}
        >Connect</button>
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