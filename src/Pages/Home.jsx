import React from 'react'
import items from '../components/Dummy/dummy'
import ItemCart from '../components/ItemCart'
import Nav from '../components/Nav'
import { useFilePicker } from 'use-file-picker';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
function Home() {
  const[cookies,setCookies] = useCookies(['access_token'])
  // const [openFileSelector,{filesContent, loading, errors}] = useFilePicker({
  //   readAs: 'DataURL',
  //   accept: [".json", ".pdf" , ".png" ],
  //   multiple: true,
  //   limitFilesConfig: { min: 1, max: 3 },
  //   // minFileSize: 0.1, // in megabytes
  //   maxFileSize: 50,
  //   // imageSizeRestrictions: {
  //   //   maxHeight: 900, 
  //   //   maxWidth: 1600,
  //   //   minHeight: 600,
  //   //   minWidth: 768,
  //   // },
  // });
  // console.log(filesContent)
  const navigate = useNavigate();
  const logout = ()=>{
    setCookies("access_token" , "");
    window.localStorage.removeItem("userID");
    navigate('/login')
  }
  return (

<div className='p-5 grid grid-cols-2 gap-y-7 md:grid-cols-4'>
       {/* {
        items.map((item)=>{
      
          return <ItemCart
          key={item.id}
          linkimg={item.imgLink}
          name = {item.productName}
          producPrice = {item.productPrice}/>
        })
       } */}
       <h1>Home page </h1>
        {/* <button onClick={() => openFileSelector()}>Select files </button>
        {/* <div>{filesContent?.map((file , index)=>
         (<img src={file.content} alt="" />))}</div>
         <div>{!!filesContent &&<img src={filesContent[0]?.content} alt="" />}</div> */}
         <h1></h1>
         <button   className='border-2 border-black mt-5' onClick={logout}>logout</button>
    </div>
  )
}

export default Home