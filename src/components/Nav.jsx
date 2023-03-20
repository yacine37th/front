import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart ,  } from "react-icons/ai";
import  { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";
function Nav() {
  // const [activeNav, setactiveNav] = useState(false);
  // const [activelink, setactivelink] = useState(false);

  const [fillShopp, setfillShopp] = useState(false);

  const [ActiveNav, setActiveNav] = useState(false);
  console.log()
  const set = ()=>{
    if(window.scrollY > 140){
      setActiveNav(true)
    }
    else {
      setActiveNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll' , set);
    return ()=> window.removeEventListener('scroll' , set)
  }, [])

  return (
    ////just test

//     <div className="flex items-center justify-between p-10 w-full ">
//       {/* <div className="flex flex-1 items-center "> */}
//         <div className="logo w-30 flex justify-center items-center max-[992px]:w-25">
//           <img
//             className="w-full"
//             src={require("./images/logo.svg").default}
//             alt="logo"
//           />
//         </div>

//        <div className={`flex flex-wrap items-center justify-between flex-1 max-[992px]:flex-col 
//        max-[992px]:fixed max-[992px]:top-0  max-[992px]:h-full max-[992px]:bg-white 
//       max-[992px]:justify-start  max-[992px]:w-1/2 max-[992px]:items-start max-[992px]:p-5 
//       max-[992px]:pt-14 transition-right duration-700  max-[992px]:-right-1/2 ${activeNav && "max-[992px]:right-0"}   `}>
//        <div className="w-full flex justify-end min-[992px]:hidden ">
//        <div className="w-7 h-7 flex flex-wrap cursor-pointer mb-10" 
//        onClick={()=>{setactiveNav(!activeNav)}}
//        >
//           <span className="w-full h-0.5 bg-black rotate-45"></span>
//           <span className="w-full h-0.5 bg-black "></span>
//           {/* <span> &times;</span> */}
//         </div>
//        </div>
//        <ul className="font-bold flex text-xl ml-12  max-[992px]:flex-col  ">

// {/* */}
//           <li className="group flex justify-center items-center mr-10 text-gray-500 ">

//           <a href="" >
//             <div className="group flex  items-center relative ">
//             <p>Features</p> 
//           <span className="ml-1 transition rotate-180 group-hover:rotate-0 "><AiOutlineUp className="" size={18}/>
//             </span>
//             </div>
//           <ul className={`absolute bg-black top-20
//            w-40 rounded-xl flex flex-col 
//             shadow-lg hidden group-hover:block z-20 
//             max-[992px]:relative max-[992px]:top-0 
//             max-[992px]:h-0 transition-h ease-in-out duration-700
//              max-[992px]:group-hover:h-full
//             `}
//             >
//             <li><a href="">Todo List</a></li>
//             <li><a href="">Todo List</a></li>
//             <li><a href="">Todo List</a></li>
//             <li><a href="">Todo List</a></li>
//             <li><a href="">Todo List</a></li>
//             {/* <div class="h-32 bg-blue-500 transition duration-500 ease-in-out hover:h-48"></div> */}
//           </ul>
//           </a>
//           </li>
//           <li className="flex mr-10 text-gray-500 max-[992px]:mr-0 max-[992px]:justify-start max-[992px]:mb-5">
//             <a href="">Company</a>
//           </li>
//           <li className="flex mr-10 text-gray-500 max-[992px]:mr-0 max-[992px]:justify-start max-[992px]:mb-5">
//             <a href="">Carrers</a>
//           </li>
//           <li className="flex text-gray-500 max-[992px]:mr-0 max-[992px]:justify-start max-[992px]:mb-5">
//             <a href="">About</a>
//           </li>
//         </ul>
//       {/* </div> */}
//       <div className="flex items-center text-lg text-gray-500 font-bold max-[992px]:flex-col max-[992px]:w-full ">
//         <button className="px-4 py-2 max-[992px]:w-full hover:bg-slate-600 rounded-2xl mb-1  hover:text-white">Login</button>
//         <button className="px-4 py-2 max-[992px]:w-full  rounded-2xl border-black border-2 hover:bg-slate-600 
//         hover:text-white ">Register</button>
//         <button class="transition ease-in-out  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
//   Save Changes
// </button>//,k,n,jjnjnjnjnnjnjnj
//       </div>
//        </div>
//         <div className="min-[991px]:hidden w-7 h-7 flex flex-wrap items-center justify-center cursor-pointer"
//         onClick={()=>{setactiveNav(!activeNav)}}
//         >
//           <span className="w-full h-0.5 bg-black"></span>
//           <span className="w-full h-0.5 bg-black"></span>
//           <span className="w-full h-0.5 bg-black"></span>
//         </div>
//     </div>


      ///the navBar for shopping cart  sticky top-0

      <div className={`w-full bg-black flex justify-end items-center p-5 
        transition duration-500 ease-in-out ${ActiveNav && "sticky top-0  bg-slate-700"}`}>
          <Link to='/'>
              <p className="text-2xl p-2 text-white font-bold">
                Shop
              </p>
          </Link>
          <Link to='/cart'>
              {fillShopp ? //deded
              <FaShoppingCart className="cursor-pointer" color="white" size={40}/>
              :
              <AiOutlineShoppingCart className="cursor-pointer" color="white" size={40}/>
              }
          </Link>
      </div>
  );
}

export default Nav;
