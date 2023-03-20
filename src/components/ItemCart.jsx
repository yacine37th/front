import React, { useState } from 'react'
import items from './Dummy/dummy'

function ItemCart({linkimg , name , producPrice}) {

    const [counter, setcounter] = useState(0);
    const onClick = ()=>{
        setcounter(counter+1)
    }

    console.log(counter)

  return (
    <div className=' flex flex-col w-48 items-center justify-center'>
    <div className='w-20'>
        <img className='w-full ' src={linkimg} alt="" />
        </div>
        <p> {name}</p>
        <p>{producPrice}</p>
        {/* {
            items.map((item)=>{
                return(
                    <>
                    <img className='w-28' src={item.imgLink} alt="" />
                    <p> {item.productName}</p>
                    <p>{item.productPrice}</p>
                    </>
                )
            })
        } */}
        <button className='p-2 flex items-center justify-center rounded-xl  text-black cursor-pointer border-solid border-2 border-black
        hover:bg-black hover:text-white transition duration-700 mt-4
        '
        onClick={onClick}
        >
            <p className='mr-2'>Add To cart</p>
            {/* {counter===0 ? 
            ""
            :
            {counter}  
            } */}

            {counter===0 ? "": counter}
        </button>
   </div>
  )
}

export default ItemCart;