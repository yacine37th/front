import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";




function SingUp() {

  const schema = yup.object().shape({
    email: yup.string().email().required(""),
    phone: yup.string().min(10).max(10).required("phone must be exact 10 digits"),
    name: yup.string().required("enter your name"),
   
    password: yup.string().min(8).required("password must be > 8 and don't contain special characters"),
    confirmedPassword: yup.string().oneOf([yup.ref("password"), null], "enter the same password"),
    address: yup.string().required(),
  });
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");

  const { register, handleSubmit , getValues, formState : {errors} } = useForm({
    resolver: yupResolver(schema),
  });



  const navigate = useNavigate();


      const submit = async ()=>{
          //e.preventDefault();
            // const formatData = new FormData();
            // formatData.append('image' , imageUrl)
          try {
            await axios.put("http://localhost:3001/auth/signup" , 
              {email ,phone,name, password , confirmedPassword , address }
          );
          alert('register completed now Login');
           navigate('/login')
          } catch (error) {
              alert(error.message);
             console.log(error.message)
          }
      }

  //  const [openFileSelector,{imageURL, loading, errors}] = useFilePicker({
  //    readAs: 'DataURL',
  //    accept: [".png" , ".jpg" , "jpeg"],  
  //    multiple: true,
  //    limitFilesConfig: { min: 1, max:  1 },
  //   //   minFileSize: 0.1,  in megabytes
  //   //  maxFileSize: 50,
  //   //   imageSizeRestrictions: {
  //   //     maxHeight: 900, 
  //   //     maxWidth: 1600,
  //   //     minHeight: 600,
  //   //     minWidth: 768,
  //   //   },
  //  });
 

  return (
    <div>
      <h1>Register</h1>
        <form className='flex flex-col w-96' onSubmit={handleSubmit(submit)}>

         <label htmlFor="name">Name</label>
        <input   className='border-2 border-black' 
             onChange={(e)=>{setname(e.target.value)}}
        {...register("name")}
        type="text" name='name' placeholder='Enter your name'/>
     
        <label htmlFor="email">Enter Your Email</label>
        <input  className='border-2 border-black'
         type="text" name='email' placeholder='Enter your email'
         onChange={(e)=>{setemail(e.target.value)}}
          {...register("email")}
         />
         <p className='text-red-700 text-xs'>{errors.email?.message}</p>

        <label htmlFor="password">Enter Your password</label>
        <input  className='border-2 border-black' 
        
         type="text" name='password'  placeholder='Enter your password' 
         onChange={(e)=>{setpassword(e.target.value)}}
         {...register("password")}
         />
             <p className='text-red-700 text-xs'>{errors.password?.message}</p>

        <label htmlFor="password">confirme Your password</label>
        <input className='border-2 border-black'
     
          type="text" name='confirmedPassword' placeholder='confirm your password' 
          onChange={(e)=>{setconfirmedPassword(e.target.value)}}
          {...register("confirmedPassword")}
          />
           <p className='text-red-700 text-xs'>{errors.confirmedPassword?.message}</p>

        <label htmlFor="address">Enter Your address</label>
        <input 
         
         className='border-2 border-black' type="text" name='address
         ' placeholder='Enter your address' 
         onChange={(e)=>{setaddress(e.target.value)}}
         {...register("address")}
         />
        
        <label htmlFor="phoneNumber">Enter Your phoneNumber</label>
        <input  
    
         className='border-2 border-black' type="text"
         name='phone' placeholder='Enter your phoneNumber' 
         onChange={(e)=>{setphone(e.target.value)}}
         {...register("phone")}
         />
              <p className='text-red-700 text-xs'>{errors.phone?.message}</p>

        {/* <input type="file" name='file' onChange={(e)=>{setfile(e.target.files[0])}} /> */}
       
        {/* <div className='w-52'>
          {/* <button onClick={() => openFileSelector() } type="button">Select a pic for profile </button>
          <div>{!!imageURL &&<img src={imageURL[0]?.content} alt="" className='w-24' />}</div>  
        </div> */}
        <button type='submit' 
        
       onMouseEnter={()=>{ const values = getValues();
        setname(values?.name );
        setemail( values?.email);
        setpassword(values?.password);
        setconfirmedPassword(values?.confirmedPassword);
        setaddress(values?.address);
        setphone(values?.phone);
        console.log(confirmedPassword);
        console.log(password);
        console.log(email)
       }}
      // onClick={handleSubmit(onSubmit)}
        className='border-2 border-black mt-5'>Create account</button>
    </form>
    <a href="/login">login</a>
    </div>
  )
}

export default SingUp